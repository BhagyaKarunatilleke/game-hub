import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameHeading from './components/GameHeading';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GenreList from './components/aside/GenreList';
import GameGrid from './components/game-grid/GameGrid';
import NavBar from './components/nav-bar/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Show when={{ base: false, lg: true }}>
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
}

export default App;
