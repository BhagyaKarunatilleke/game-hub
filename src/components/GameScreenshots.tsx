import useGameScreenshots from '@/hooks/useGameScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(gameId);

  if (error) throw error;

  if (isLoading) return null;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
      {data?.results.map((screenshot) => (
        <Image
          key={screenshot.id}
          src={screenshot.image}
          alt={screenshot.id.toString()}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
