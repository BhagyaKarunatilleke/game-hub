import axios, { AxiosRequestConfig } from 'axios';

// VITE_ seems to be needed as a prefix when declaring custom environment variables in .env file.
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchDataResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: apiKey,
  },
});

export default axiosInstance;

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (requestOptions?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchDataResponse<T>>(this.endpoint, requestOptions)
      .then((res) => res.data);
  };

  getOne = (identifier: number | string, requestOptions?: AxiosRequestConfig) =>
    axiosInstance
      .get<T>(`${this.endpoint}/${identifier}`, requestOptions)
      .then((res) => res.data);
}

export { APIClient };
