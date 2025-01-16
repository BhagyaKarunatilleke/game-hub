import useGame from '@/hooks/useGame';
import { Heading, Spinner, Stack, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading)
    return (
      <Stack height={'lg'} alignItems={'center'} justifyContent={'center'}>
        <Spinner size={'xl'} />
      </Stack>
    );

  if (error || !game) throw error;

  return (
    <>
      <Heading size={'4xl'}>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
