import GameTrailer from '@/entities/GameTrailer';
import { APIClient, FetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useGameTrailers = (gameId: number) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${gameId}/movies`);

  return useQuery<FetchDataResponse<GameTrailer>, Error>({
    queryKey: ['games', gameId, 'movies'],
    queryFn: apiClient.getAll,
    staleTime: ms('1h'),
  });
};

export default useGameTrailers;
