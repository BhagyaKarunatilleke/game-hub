import { FetchDataResponse } from '@/services/api-client';
import platformService, { Platform } from '@/services/platformService';
import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ['platforms', 'lists', 'parents'],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: platforms,
  });

export default usePlatforms;
