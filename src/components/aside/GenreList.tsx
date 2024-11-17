import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Text } from '@chakra-ui/react';

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List.Root>
      {data.map((genre) => (
        <List.Item key={genre.id} listStyleType='none' paddingY={2}>
          <HStack>
            <Image
              boxSize={8}
              borderRadius={4}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize='lg'>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
