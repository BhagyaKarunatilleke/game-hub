import { Box, Grid, GridItem } from '@chakra-ui/react';
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
        <GridItem area={'aside'}>Aside</GridItem>
      </Box>
      <GridItem area={'main'}>Main</GridItem>
    </Grid>
  );
}

export default App;
