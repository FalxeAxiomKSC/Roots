const NodeCache = require('node-cache');

const cache = new NodeCache({
  stdTTL: parseInt(process.env.CACHE_TTL, 10) || 300,
  checkperiod: 120,
  useClones: false,
});

const CACHEABLE_METHODS = new Set(['GET', 'HEAD']);
const CACHEABLE_STATUS = new Set([200, 203, 204]);

function cacheMiddleware(ttlOverride) {
  return (req, res, next) => {
    if (!CACHEABLE_METHODS.has(req.method)) return next();

    const key = `${req.method}:${req.originalUrl}`;

    const cached = cache.get(key);
    if (cached) {
      res.set('X-Cache', 'HIT');
      return res.status(200).json(cached);
    }

    const originalJson = res.json.bind(res);
    res.json = (body) => {
      if (CACHEABLE_STATUS.has(res.statusCode)) {
        const ttl = ttlOverride || undefined;
        cache.set(key, body, ttl);
        res.set('X-Cache', 'MISS');
      }
      return originalJson(body);
    };

    next();
  };
}

function invalidateCache(pattern) {
  const keys = cache.keys();
  const matching = pattern ? keys.filter((k) => k.includes(pattern)) : keys;
  matching.forEach((k) => cache.del(k));
  return matching.length;
}

function getCacheStats() {
  return cache.getStats();
}

module.exports = { cacheMiddleware, invalidateCache, getCacheStats };
