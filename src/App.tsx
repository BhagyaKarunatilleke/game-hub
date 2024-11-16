import { Box, Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/nav-bar/NavBar';
import GameGrid from './components/game-grid/GameGrid';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={'nav'}>
        <NavBar />
      </GridItem>
      <Box display={{ base: 'none', lg: 'block' }}>
        <GridItem area={'aside'}>Aside</GridItem>
      </Box>
      <GridItem area={'main'}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
