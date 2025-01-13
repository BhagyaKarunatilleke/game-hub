import usePlatform from '@/hooks/usePlatform';
import usePlatforms from '@/hooks/usePlatforms';
import { HStack } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import { Button } from './ui/button';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu';

interface Props {
  onSelectPlatform: (platform: number | null) => void;
  selectedPlatformId: number | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  const selectedPlatform = usePlatform(selectedPlatformId);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='subtle' size='sm' disabled={isLoading}>
          <HStack>
            {selectedPlatform?.name || 'Platforms'}
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem key='all' value='all' onClick={() => onSelectPlatform(null)}>
          All
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => onSelectPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
