import { APIClient } from './api-client';
import { Platform } from './platformService';

export interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw?: string;
}

export interface GameQuery {
  genreId?: number;
  platformId?: number | null;
  sortOrder?: string;
  searchText?: string;
}

const apiClient = new APIClient<Game>('/games');

export default apiClient;
