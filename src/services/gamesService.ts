import { APIClient } from './api-client';
import { Genre } from './genresService';
import { Platform } from './platformService';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const apiClient = new APIClient<Game>('/games');

export default apiClient;
