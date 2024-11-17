import useGenres, { Genre } from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { HStack, Image, List, Skeleton, Text } from '@chakra-ui/react';
import { SkeletonText } from '../ui/skeleton';
import { Button } from '../ui/button';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 10 }).map((_, index) => index);

  if (error) return null;

  if (isLoading)
    return (
      <List.Root>
        {skeletons.map((skeleton) => (
          <List.Item key={skeleton} listStyleType='none' paddingY={2}>
            <HStack>
              <Skeleton boxSize={8} />
              <SkeletonText noOfLines={1} />
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    );

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
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize='lg'
              variant='ghost'
            >
              {genre.name}
            </Button>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
