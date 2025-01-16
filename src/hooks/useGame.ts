import gamesService from '@/services/gamesService';
import { Game } from '@/entities/Game';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

const useGame = (slug: string) =>
  useQuery<Game, Error>({
    queryKey: ['games', slug],
    queryFn: () => gamesService.getOne(slug),
    staleTime: ms('1h'),
  });

export default useGame;
