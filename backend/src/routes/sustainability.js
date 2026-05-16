const express = require('express');
const compressionMiddleware = require('./middleware/compression');
const { cacheMiddleware, getCacheStats } = require('./middleware/cache');
const { getCarbonIntensity, classifyCarbonLevel } = require('./services/carbon-aware');
const { getSystemMetrics } = require('./services/metrics');

function registerSustainabilityRoutes(app) {
  const router = express.Router();

  router.get('/metrics', (_req, res) => {
    const systemMetrics = getSystemMetrics();
    const cacheStats = getCacheStats();
    res.json({
      ...systemMetrics,
      cache: cacheStats,
      green_hosting: {
        compression_enabled: process.env.COMPRESSION_ENABLED !== 'false',
        carbon_aware_scheduling: process.env.CARBON_AWARE_SCHEDULING === 'true',
        cache_ttl_seconds: parseInt(process.env.CACHE_TTL, 10) || 300,
        data_retention_days: parseInt(process.env.DATA_RETENTION_DAYS, 10) || 365,
      },
    });
  });

  router.get('/carbon-intensity', async (req, res) => {
    const zone = req.query.zone || 'US-WECC';
    const intensity = await getCarbonIntensity(zone);
    if (!intensity) {
      return res.status(503).json({
        error: 'Carbon intensity data unavailable',
        zone,
        hint: 'This endpoint depends on the Electricity Maps API. Configure CARBON_AWARE_SCHEDULING=true to enable carbon-aware behavior.',
      });
    }
    res.json({
      ...intensity,
      level: classifyCarbonLevel(intensity.intensity),
    });
  });

  router.get('/health', (_req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
  });

  app.use('/sustainability', router);
}

module.exports = { registerSustainabilityRoutes };
