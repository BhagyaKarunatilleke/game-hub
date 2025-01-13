import { FetchDataResponse } from '@/services/api-client';
import gamesService, { Game, GameQuery } from '@/services/gamesService';
import { useInfiniteQuery } from '@tanstack/react-query';

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchDataResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gamesService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
