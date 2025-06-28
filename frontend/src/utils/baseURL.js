
// src/utils/baseURL.js

const getBaseUrl = () => {
  return import.meta.env.VITE_API_BASE_URL || 'https://book-store-back-zeta.vercel.app';
};

export default getBaseUrl;


