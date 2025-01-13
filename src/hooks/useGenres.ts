import genres from '@/data/genres';
import { FetchDataResponse } from '@/services/api-client';
import genresService, { Genre } from '@/services/genresService';
import { useQuery } from '@tanstack/react-query';

const useGenres = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: genres,
  });

export default useGenres;
