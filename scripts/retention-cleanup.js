require('dotenv').config();
const { Pool } = require('pg');
const { cleanupExpiredData } = require('../src/services/data-retention');

async function main() {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://localhost/sustainability_funding',
  });

  console.log(`[${new Date().toISOString()}] Running data retention cleanup...`);

  const result = await cleanupExpiredData(pool, process.env.DATA_RETENTION_DAYS || 365);
  console.log(`[${new Date().toISOString()}] Cleanup result:`, JSON.stringify(result, null, 2));

  await pool.end();
}

main().catch((err) => {
  console.error('Retention cleanup failed:', err.message);
  process.exit(1);
});
