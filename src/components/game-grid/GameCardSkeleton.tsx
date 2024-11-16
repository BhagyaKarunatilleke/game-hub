import { Card } from '@chakra-ui/react';
import { Skeleton, SkeletonText } from '../ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <Card.Root borderRadius='1rem' overflow='hidden' width='300px'>
      <Skeleton height='200px' />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
