import { Game } from '@/hooks/useGames';
import { Card, Heading, Image } from '@chakra-ui/react';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius='1rem' overflow='hidden'>
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Heading fontSize='lg'>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;