import { APIClient } from './api-client';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

export default apiClient;
