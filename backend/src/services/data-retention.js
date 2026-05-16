const { Pool } = require('pg');

async function cleanupExpiredData(pool, retentionDays) {
  const days = parseInt(retentionDays, 10) || 365;
  const client = await pool.connect();
  const results = {};

  try {
    await client.query('BEGIN');

    const draftApps = await client.query(
      `DELETE FROM applications WHERE status = 'draft' AND applied_at < NOW() - INTERVAL '1 day' RETURNING id`
    );
    results.draftApplicationsCleaned = draftApps.rowCount;

    const oldNotifications = await client.query(
      `DELETE FROM matches WHERE is_notified = true AND created_at < NOW() - make_interval(days => $1) RETURNING id`,
      [days]
    );
    results.oldMatchesCleaned = oldNotifications.rowCount;

    await client.query('COMMIT');
    results.status = 'success';
  } catch (err) {
    await client.query('ROLLBACK');
    results.status = 'error';
    results.error = err.message;
  } finally {
    client.release();
  }

  return results;
}

async function vacuumStats(pool) {
  const result = await pool.query(`
    SELECT schemaname, tablename
    FROM pg_tables
    WHERE schemaname = 'public'
    ORDER BY tablename
  `);
  return result.rows.map((r) => `${r.schemaname}.${r.tablename}`);
}

module.exports = { cleanupExpiredData, vacuumStats };
