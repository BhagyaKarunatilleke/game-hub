import { AspectRatio, HStack, Image } from '@chakra-ui/react';
import logo from '../../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack padding={'1rem'}>
      <Link to={'/'}>
        <AspectRatio width={'3.5rem'} ratio={1 / 1}>
          <Image src={logo} objectFit='cover' />
        </AspectRatio>
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
