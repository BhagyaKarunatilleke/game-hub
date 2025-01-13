import useGenres from '@/hooks/useGenres';
import usePlatforms from '@/hooks/usePlatforms';
import { GameQuery } from '@/services/gamesService';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platformData } = usePlatforms();
  const { data: genresData } = useGenres();

  const platformName =
    platformData.results.find(
      (platform) => platform.id === gameQuery.platformId
    )?.name || '';

  const genreName =
    genresData.results.find((genre) => genre.id === gameQuery.genreId)?.name ||
    '';

  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading marginBottom={3} fontSize='2xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
