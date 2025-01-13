import axios, { AxiosRequestConfig } from 'axios';

// VITE_ seems to be needed as a prefix when declaring custom environment variables in .env file.
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

interface FetchDataResponse<T> {
  count: number;
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
      .then((res) => res.data.results);
  };
}

export { APIClient };
