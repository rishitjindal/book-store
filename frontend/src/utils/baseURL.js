
// src/utils/baseURL.js

const getBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
};

export default getBaseUrl;


