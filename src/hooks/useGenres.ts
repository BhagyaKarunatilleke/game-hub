import genres from '@/data/genres';
import { FetchDataResponse } from '@/services/api-client';
import genresService, { Genre } from '@/services/genresService';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useGenres = () =>
  useQuery<FetchDataResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: genresService.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
