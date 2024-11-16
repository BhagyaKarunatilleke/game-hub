import { Box, Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/nav-bar/NavBar';

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
        <GridItem area={'aside'} bg={'gold'}>
          Aside
        </GridItem>
      </Box>
      <GridItem area={'main'} bg={'dodgerblue'}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
