import useGenre from '@/hooks/useGenre';
import usePlatform from '@/hooks/usePlatform';
import { GameQuery } from '@/services/gamesService';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading marginBottom={3} fontSize='2xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
