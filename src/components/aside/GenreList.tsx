import useGenres from '@/hooks/useGenres';
import getCroppedImageUrl from '@/services/image-url';
import { Heading, HStack, Image, List } from '@chakra-ui/react';
import { SkeletonText, Skeleton } from '../ui/skeleton';
import { Button } from '../ui/button';
import { Genre } from '@/services/genresService';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = Array.from({ length: 10 }).map((_, index) => index);

  if (error) return null;

  if (isLoading)
    return (
      <>
        <Heading fontSize='2xl'>Genres</Heading>
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
      </>
    );

  return (
    <>
      <Heading fontSize='2xl'>Genres</Heading>
      <List.Root>
        {data.map((genre) => (
          <List.Item key={genre.id} listStyleType='none' paddingY={3}>
            <HStack>
              <Image
                boxSize={8}
                borderRadius={4}
                src={getCroppedImageUrl(genre.image_background)}
                objectFit='cover'
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                width='min-content'
                whiteSpace='normal'
                textAlign='left'
                fontSize={genre.id === selectedGenre?.id ? 'larger' : 'lg'}
                fontWeight={
                  genre.id === selectedGenre?.id ? 'extrabold' : 'normal'
                }
                variant='ghost'
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
