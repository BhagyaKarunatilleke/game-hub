import usePlatforms from './usePlatforms';

const usePlatform = (id?: number | null) => {
  const { data } = usePlatforms();

  return data?.results.find((platform) => platform.id === id);
};

export default usePlatform;
