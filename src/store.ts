import { GameQuery } from '@/services/gamesService';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import { create } from 'zustand';

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number | null) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId: number | null) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
}));

if (process.env.NODE_ENV === 'development')
  mountStoreDevtool('GameQueryStore', useGameQueryStore);

export default useGameQueryStore;
