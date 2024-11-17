import { Box, Grid, GridItem } from '@chakra-ui/react';
import NavBar from './components/nav-bar/NavBar';
import GameGrid from './components/game-grid/GameGrid';
import GenreList from './components/aside/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
            onSelectGenre={(genre) =>
              setGameQuery({ ...gameQuery, genre: genre })
            }
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Box>
      <GridItem area={'main'}>
        <PlatformSelector
          onSelectPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform: platform })
          }
          selectedPlatform={gameQuery.platform}
        />
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
