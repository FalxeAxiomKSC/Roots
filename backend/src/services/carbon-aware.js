const CARBON_INTENSITY_URL = 'https://api.electricitymap.org/v2/carbon-intensity/latest';

async function getCarbonIntensity(zone) {
  try {
    const response = await fetch(`${CARBON_INTENSITY_URL}?zone=${zone}`, {
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return null;
    const data = await response.json();
    return {
      intensity: data.carbonIntensity,
      unit: data.units?.carbonIntensity || 'gCO2eq/kWh',
      zone,
      fetchedAt: new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

const LOW_THRESHOLD = 150;
const HIGH_THRESHOLD = 400;

function classifyCarbonLevel(intensity) {
  if (intensity === null) return 'unknown';
  if (intensity <= LOW_THRESHOLD) return 'low';
  if (intensity <= HIGH_THRESHOLD) return 'medium';
  return 'high';
}

function shouldDeferToGreenerWindow(intensity) {
  if (!process.env.CARBON_AWARE_SCHEDULING || process.env.CARBON_AWARE_SCHEDULING === 'false') {
    return false;
  }
  return classifyCarbonLevel(intensity) === 'high';
}

module.exports = {
  getCarbonIntensity,
  classifyCarbonLevel,
  shouldDeferToGreenerWindow,
  LOW_THRESHOLD,
  HIGH_THRESHOLD,
};
