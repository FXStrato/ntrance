import Head from 'next/head';
import Link from 'next/link';
import { Center, Heading, Text, VStack, SimpleGrid, Container, Box, Link as ChakraLink } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Indexed Content</title>
        <meta name='description' content='Repo of useful things' />
      </Head>
      <Center textAlign='center' h='10rem'>
        <VStack spacing={4}>
          <Heading fontSize={'2xl'}>Useful things</Heading>
          <Text fontWeight={500}>Subtext of useful things</Text>
        </VStack>
      </Center>
      <Container maxW='2xl' display='flex'>
        <SimpleGrid columns={1} spacing={5}>
          <ChakraLink>
            <Link href='/ffxiv-addons'>
              <a>FFXIV Addons</a>
            </Link>
          </ChakraLink>
        </SimpleGrid>
      </Container>
    </>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from '../src/server/utilities';
