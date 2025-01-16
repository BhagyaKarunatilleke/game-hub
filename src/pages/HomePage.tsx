import {
  Box,
  Grid,
  GridItem,
  HStack,
  Show,
  useBreakpointValue,
} from '@chakra-ui/react';
import GameHeading from '../components/GameHeading';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';
import GenreList from '../components/aside/GenreList';
import GameGrid from '../components/game-grid/GameGrid';

const HomePage = () => {
  const value = useBreakpointValue({ base: 'base', lg: 'lg' });

  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <Show when={value !== 'base'}>
        <GridItem area={'aside'} paddingX={2}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box paddingStart={4}>
          <GameHeading />
          <HStack spaceX={4} marginBottom={4}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
