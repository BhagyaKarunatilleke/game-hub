import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import GameHeading from './components/GameHeading';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GenreList from './components/aside/GenreList';
import GameGrid from './components/game-grid/GameGrid';
import NavBar from './components/nav-bar/NavBar';
import { GameQuery } from './services/gamesService';

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
        <NavBar
          onSearch={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>
      <Show when={{ base: false, lg: true }}>
        <GridItem area={'aside'} paddingX={2}>
          <GenreList
            onSelectGenre={(genreId) =>
              setGameQuery({ ...gameQuery, genreId: genreId })
            }
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Box paddingStart={4}>
          <GameHeading gameQuery={gameQuery} />
          <HStack spaceX={4} marginBottom={4}>
            <PlatformSelector
              onSelectPlatform={(platformId) =>
                setGameQuery({ ...gameQuery, platformId: platformId })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder: sortOrder })
              }
              selectedSortOrder={gameQuery.sortOrder}
            />
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
