import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://pacmack-api.onrender.com/api",
  headers: {
    'Content-Type': 'application/json',
  },
});

// 'http://localhost:5000/api'
// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth tokens here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle errors globally
    return Promise.reject(error);
  }
);

export default axiosInstance;