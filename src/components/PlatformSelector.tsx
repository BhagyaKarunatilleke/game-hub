import { HStack } from '@chakra-ui/react';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu';
import { Button } from './ui/button';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '@/hooks/usePlatforms';
import { Platform } from '@/services/platformService';

interface Props {
  onSelectPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return null;

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='subtle' size='sm' disabled={isLoading}>
          <HStack>
            {selectedPlatform?.name ?? 'Platforms'}
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem key='all' value='all' onClick={() => onSelectPlatform(null)}>
          All
        </MenuItem>
        {data?.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.slug}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default PlatformSelector;
