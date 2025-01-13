import gamesService, { Game, GameQuery } from '@/services/gamesService';
import { useQuery } from '@tanstack/react-query';

const useGames = (gameQuery: GameQuery) =>
  useQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: () =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24h,
  });

export default useGames;
