import Head from 'next/head';
import Link from 'next/link';
import { Center, Heading, Text, VStack, SimpleGrid, Container, Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Indexed Content</title>
        <meta name='description' content='Repo of useful things' />
      </Head>
      <main>
        <Center textAlign='center' h='10rem' color='white'>
          <VStack spacing={4}>
            <Heading fontSize={'2xl'}>Useful things</Heading>
            <Text fontWeight={500}>Subtext of useful things</Text>
          </VStack>
        </Center>
        <Container maxW='2xl'>
          <SimpleGrid columns={1} spacing={5}>
            <Box>
              <Link href='/ffxiv-addons'>FFXIV Addons</Link>
            </Box>
          </SimpleGrid>
        </Container>
      </main>
    </div>
  );
}

// re-export the reusable `getServerSideProps` function
export { getServerSideProps } from '../src/server/utilities';
