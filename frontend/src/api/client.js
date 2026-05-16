import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

// Cooperatives API
export const cooperativeApi = {
  getAll: () => api.get('/api/cooperatives'),
  getById: (id) => api.get(`/api/cooperatives/${id}`),
  create: (data) => api.post('/api/cooperatives', data),
  update: (id, data) => api.patch(`/api/cooperatives/${id}`, data),
  delete: (id) => api.delete(`/api/cooperatives/${id}`),
};

// Aid Groups API
export const aidGroupApi = {
  getAll: () => api.get('/api/aid-groups'),
  getById: (id) => api.get(`/api/aid-groups/${id}`),
  create: (data) => api.post('/api/aid-groups', data),
  update: (id, data) => api.patch(`/api/aid-groups/${id}`, data),
  delete: (id) => api.delete(`/api/aid-groups/${id}`),
};

// Funding Sources API
export const fundingSourceApi = {
  getAll: () => api.get('/api/funding-sources'),
  getById: (id) => api.get(`/api/funding-sources/${id}`),
  create: (data) => api.post('/api/funding-sources', data),
  update: (id, data) => api.patch(`/api/funding-sources/${id}`, data),
  delete: (id) => api.delete(`/api/funding-sources/${id}`),
};

// Applications API
export const applicationApi = {
  getAll: () => api.get('/api/applications'),
  getById: (id) => api.get(`/api/applications/${id}`),
  create: (data) => api.post('/api/applications', data),
  update: (id, data) => api.patch(`/api/applications/${id}`, data),
  delete: (id) => api.delete(`/api/applications/${id}`),
};

// Intentional Communities API
export const communityApi = {
  getAll: () => api.get('/api/intentional-communities'),
  getById: (id) => api.get(`/api/intentional-communities/${id}`),
  create: (data) => api.post('/api/intentional-communities', data),
  update: (id, data) => api.patch(`/api/intentional-communities/${id}`, data),
  delete: (id) => api.delete(`/api/intentional-communities/${id}`),
};

// Matches API
export const matchApi = {
  getByCooperativeId: (cooperativeId) => api.get(`/api/matches/${cooperativeId}`),
};

// Sustainability Metrics API
export const sustainabilityApi = {
  getMetrics: () => api.get('/sustainability/metrics'),
  getCarbonIntensity: (zone = 'US-WECC') => api.get('/sustainability/carbon-intensity', { params: { zone } }),
  getHealth: () => api.get('/sustainability/health'),
};

export default api;
