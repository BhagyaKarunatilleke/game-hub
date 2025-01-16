import gamesService, { Game } from '@/services/gamesService';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () => gamesService.getOne(slug),
    staleTime: ms('1h'),
  });

export default useGame;
