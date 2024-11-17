import apiClient from '@/services/api-client';
import { useEffect, useState } from 'react';

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        if (error) setError('');
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;
