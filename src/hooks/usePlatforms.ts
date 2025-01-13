import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import platformService, { Platform } from '@/services/platformService';
import { FetchDataResponse } from '@/services/api-client';

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ['platforms', 'lists', 'parents'],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h,
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;
