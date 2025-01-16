import ExpandableText from '@/components/ExpandableText';
import GameAttributes from '@/components/GameAttributes';
import GameScreenshots from '@/components/GameScreenshots';
import GameTrailer from '@/components/GameTrailer';
import useGame from '@/hooks/useGame';
import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  Stack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Stack height={'lg'} alignItems={'center'} justifyContent={'center'}>
        <Spinner size={'xl'} />
      </Stack>
    );

  if (error || !game) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
        <GridItem>
          <Heading size={'4xl'}>{game.name}</Heading>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </GridItem>
        <GridItem>
          <Box marginBottom={4}>
            <GameTrailer gameId={game.id} />
          </Box>
          <GameScreenshots gameId={game.id} />
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
