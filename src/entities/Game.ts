import Platform from '@/entities/Platform';
import Genre from './Genre';
import Publisher from './Publisher';

export default interface Game {
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms?: { platform: Platform }[];
  genres?: Genre[];
  metacritic: number;
  rating_top: number;
  description_raw?: string;
  publishers?: Publisher[];
}
