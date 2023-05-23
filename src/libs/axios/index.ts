import axios, { AxiosRequestConfig, AxiosError } from 'axios';

export interface CafeResponse<T> {
  status: number;
  code: string;
  successMessage: string;
  responseObject: T;
}

const axiosClient = axios.create({
  // baseURL: process.env.API_ADDRESS,
  baseURL: 'https://coffee-api.snaps.com',
  timeout: 8000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://coffee-api.snaps.com',
  },
});

axiosClient.interceptors.request.use(config => {
  const accessToken = localStorage.getItem('access_token');
  if (!accessToken) {
    config.headers['Access-Authorization'] = null;
    return config;
  }
  config.headers['Access-Authorization'] = `Bearer ${accessToken}`;
  return config;
});

axiosClient.interceptors.response.use(
  res => {
    return res;
  },
  async error => {
    const { config, response } = error;
    if (response.status === 401) {
      const res = await axiosClient.post('https://coffee-api.snaps.com/v1/auth/retrieve-token');
      const newToken = res.data.responseObject.split(' ')[1];
      localStorage.setItem('access_token', newToken);
      config.headers['Access-Authorization'] = `Bearer ${newToken}`;
      return axios(config);
    }
    return Promise.reject(error);
  }
);

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
