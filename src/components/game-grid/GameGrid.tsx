import useGames from '@/hooks/useGames';
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Fragment } from 'react/jsx-runtime';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames();
  const skeletons = Array.from({ length: 9 }).map((_, index) => index);

  if (error) return <Text marginStart={4}>{error.message}</Text>;

  if (data?.pages.length === 1 && data.pages[0].count === 0)
    return <Text marginStart={4}>Oops! Nothing to see here!</Text>;

  const fetchedGamesCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      next={fetchNextPage}
      hasMore={!!hasNextPage} // !! used to convert undefined to false
      loader={<Spinner marginY={4} marginStart={4} />}
    >
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4} padding={4}>
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
    </InfiniteScroll>
  );
};

export default GameGrid;
