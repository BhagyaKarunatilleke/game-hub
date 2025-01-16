import NavBar from '@/components/nav-bar/NavBar';
import { Center, Heading, Stack, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Stack
        alignItems={'center'}
        justifyContent={'center'}
        height={'lg'}
        direction={'column'}
      >
        <Heading size={'4xl'}>Oops! </Heading>
        <Text fontSize={'larger'}>
          {isRouteErrorResponse(error)
            ? 'This page does not exist.'
            : 'An error occurred.'}
        </Text>
      </Stack>
    </>
  );
};

export default ErrorPage;
