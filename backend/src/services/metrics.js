const os = require('os');

function getSystemMetrics() {
  const uptime = process.uptime();
  const mem = process.memoryUsage();
  const cpus = os.cpus();

  return {
    timestamp: new Date().toISOString(),
    uptime_seconds: Math.round(uptime),
    process: {
      memory_rss_mb: Math.round(mem.rss / 1024 / 1024),
      memory_heap_used_mb: Math.round(mem.heapUsed / 1024 / 1024),
      memory_heap_total_mb: Math.round(mem.heapTotal / 1024 / 1024),
      cpu_count: cpus.length,
    },
    system: {
      load_average: os.loadavg().map((l) => l.toFixed(2)),
      total_memory_mb: Math.round(os.totalmem() / 1024 / 1024),
      free_memory_mb: Math.round(os.freemem() / 1024 / 1024),
    },
  };
}

module.exports = { getSystemMetrics };
