import { FetchDataResponse } from '@/services/api-client';
import platformService from '@/services/platformService';
import Platform from '@/entities/Platform';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platforms from '../data/platforms';

const usePlatforms = () =>
  useQuery<FetchDataResponse<Platform>, Error>({
    queryKey: ['platforms', 'lists', 'parents'],
    queryFn: platformService.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });

export default usePlatforms;
