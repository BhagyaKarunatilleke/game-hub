import axios from 'axios';

// VITE_ seems to be needed as a prefix when declaring custom environment variables in .env file.
const apiKey = import.meta.env.VITE_RAWG_API_KEY;

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: apiKey,
  },
});
