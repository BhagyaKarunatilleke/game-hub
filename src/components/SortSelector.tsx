import { HStack } from '@chakra-ui/react';
import { Button } from './ui/button';
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from './ui/menu';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant='subtle' size='sm'>
          <HStack>
            Order by: Relevance
            <BsChevronDown />
          </HStack>
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem key='1' value='1'>
          Relevance
        </MenuItem>
        <MenuItem key='2' value='2'>
          Date added
        </MenuItem>
        <MenuItem key='3' value='3'>
          Name
        </MenuItem>
        <MenuItem key='4' value='4'>
          Release date
        </MenuItem>
        <MenuItem key='5' value='5'>
          Popularity
        </MenuItem>
        <MenuItem key='6' value='6'>
          Average rating
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
