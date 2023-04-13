import axios, { AxiosRequestConfig, AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: process.env.API_ADDRESS,
  timeout: 8000,
  headers: {
    'Content-type': 'application/json',
  },
});
// axiosClient.interceptors.request.use(
//     (config: AxiosRequestConfig) => {
//         if (config.headers === undefined) {
//             config.headers = {};
//         }
//         const token = localStorage.getItem(‘token’);
//         if (token) {
//             config.headers.Authorization = token;
//         }
//         return config;
//     },
//     (error: AxiosError) => Promise.reject(error),
// );
export default axiosClient;
