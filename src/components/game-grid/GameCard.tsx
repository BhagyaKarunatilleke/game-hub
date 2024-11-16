import { Game } from '@/hooks/useGames';
import { Card, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius='1rem' overflow='hidden'>
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Heading fontSize='lg'>{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
