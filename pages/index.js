import Head from 'next/head';
import Link from 'next/link';
import { Center, Heading, Text, VStack, SimpleGrid, Container, Link as ChakraLink } from '@chakra-ui/react';
import manifest from '../public/manifest.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>nTrance</title>
        <meta property='description' content={manifest.description} />
      </Head>
      <Center textAlign='center' h='10rem'>
        <VStack spacing={4}>
          <Heading fontSize={'2xl'}>Useful things</Heading>
          <Text fontWeight={500}>Subtext of useful things</Text>
        </VStack>
      </Center>
      <Container maxW='2xl' display='flex'>
        <SimpleGrid columns={1} spacing={5}>
          <Link passHref href='/ffxiv-addons'>
            <ChakraLink>FFXIV Addons</ChakraLink>
          </Link>
        </SimpleGrid>
      </Container>
    </>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from '../src/server/utilities';
