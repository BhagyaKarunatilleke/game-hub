import { Box, Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/nav-bar/NavBar';
import GameGrid from './components/game-grid/GameGrid';
import GenreList from './components/aside/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
      <Box display={{ base: 'none', lg: 'block' }}>
        <GridItem area={'aside'} paddingX={2}>
          <GenreList
            onSelectGenre={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Box>
      <GridItem area={'main'}>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
