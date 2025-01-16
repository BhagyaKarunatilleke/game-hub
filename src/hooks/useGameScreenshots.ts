import GameScreenshot from '@/entities/GameScreenshot';
import { APIClient, FetchDataResponse } from '@/services/api-client';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useGameScreenshots = (gameId: number) => {
  const apiClient = new APIClient<GameScreenshot>(
    `/games/${gameId}/screenshots`
  );

  return useQuery<FetchDataResponse<GameScreenshot>, Error>({
    queryKey: ['games', gameId, 'screenshots'],
    queryFn: apiClient.getAll,
    staleTime: ms('1h'),
  });
};

export default useGameScreenshots;
