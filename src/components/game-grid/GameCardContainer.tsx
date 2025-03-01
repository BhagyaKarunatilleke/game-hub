import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      borderRadius='1rem'
      overflow='hidden'
      transition='transform 0.2s ease-in'
      _hover={{
        transform: 'scale(1.03)',
      }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
