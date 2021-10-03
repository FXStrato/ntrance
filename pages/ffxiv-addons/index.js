import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import ReleaseCard from '../../components/ReleaseCard';
import {
  Center,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import Link from 'next/link';
import client from '../../src/server/apollo-client';
import { repos, repoQuery } from '../../components/helpers';

const FFXIVAddons = React.memo(({ data }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    if (data && !data.errorType) {
      let cards = [];
      repos.map((repo) => {
        const el = data[repo];
        if (el?.releases?.nodes[0]) {
          cards.push(<ReleaseCard {...el.releases.nodes[0]} />);
        }
      });
      setCards(cards);
    } else {
      setCards(
        <Center>
          <Text color='red.600'>An error occurred querying for the repositories</Text>
        </Center>
      );
      if (data?.errorType === 'network') console.error(`Network error querying repos: ${data.statusCode}`);
      if (data?.errorType === 'graphQL') console.error(`GraphQL error(s) querying repos`);
    }
  }, [data]);

  return (
    <div>
      <Head>
        <title>FFXIV Addons</title>
        <meta name='description' content='Tracks latest versions of specific ffxiv related github repositories' />
      </Head>

      <main>
        <Center textAlign='center' h='10rem'>
          <VStack spacing={4}>
            <Breadcrumb w='full' textAlign='left' mb={2}>
              <BreadcrumbItem>
                <BreadcrumbLink>
                  <Link href='/'>
                    <a>Home</a>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink>FFXIV-Addons</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Heading fontSize={'xl'}>FFXIV Addons</Heading>
            <Text fontWeight={500}>
              Tracker for specific FFXIV related repositories so I don&apos;t have to go to each individual one
            </Text>
          </VStack>
        </Center>
        <Container maxW='2xl'>
          <SimpleGrid columns={1} spacing={3}>
            {cards}
          </SimpleGrid>
        </Container>
      </main>
    </div>
  );
});

FFXIVAddons.displayName = 'FFXIVAddons';

export async function getServerSideProps(context) {
  let data = null;
  // Comment this to the end of the if statement when doing local dev
  const r = await client
    .query({
      query: repoQuery,
    })
    .then((res) => res)
    .catch((err) => err);
  if (r.networkError) {
    data = { statusCode: r.networkError.statusCode, errorType: 'network' };
  } else if (r.graphQLErrors) {
    data = { errorType: 'graphQL' };
  } else {
    data = r.data;
    console.info(JSON.stringify(data.rateLimit));
  }
  const { req } = context;
  return {
    props: {
      data: data,
      cookies: req.headers.cookie ?? '',
    },
  };
}

export default FFXIVAddons;