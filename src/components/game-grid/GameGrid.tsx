import useGames from '@/hooks/useGames';
import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '@/services/gamesService';
import { Fragment } from 'react/jsx-runtime';
import { Button } from '../ui/button';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useGames(gameQuery);
  const skeletons = Array.from({ length: 9 }).map((_, index) => index);

  if (error) return <Text marginStart={4}>{error.message}</Text>;

  if (data?.pages.length === 1 && data.pages[0].count === 0)
    return <Text marginStart={4}>Oops! Nothing to see here!</Text>;

  return (
    <Box padding={4}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4}>
        {isLoading
          ? skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : data.pages.map((page, index) => (
              <Fragment key={index}>
                {page.results.map((game) => (
                  <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                  </GameCardContainer>
                ))}
              </Fragment>
            ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={4}
          disabled={isFetchingNextPage || isLoading}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage ? 'Loading...' : 'Load more'}
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
