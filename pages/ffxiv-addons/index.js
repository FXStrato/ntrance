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
import logger from '../../src/server/logger';
import { repoQuery, isToday } from '../../components/helpers';

const FFXIVAddons = React.memo(({ data }) => {
  const [cards, setCards] = useState();

  useEffect(() => {
    if (data && !data.errorType) {
      let cards = [];
      const dateSorted = Object.values(data);
      //First element is always the rateLimit, remove that before sorting
      dateSorted.shift();
      // Sort by descending
      dateSorted.sort((a, b) =>
        new Date(a?.releases.nodes[0].publishedAt) >= new Date(b?.releases.nodes[0].publishedAt) ? -1 : 1
      );
      for (const repo of dateSorted) {
        if (repo?.releases?.nodes[0]) {
          const isUpdated = isToday(new Date(repo.releases.nodes[0].publishedAt));
          cards.push(
            <ReleaseCard
              {...repo.releases.nodes[0]}
              isUpdated={isUpdated}
              key={`releasecard-${repo.releases.nodes[0].repository.name}`}
            />
          );
        }
      }
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
        <title>nTrance | FFXIV Addons</title>
        <meta name='og:title' content='nTrance | FFXIV Addons'/>
        <meta name='twitter:title' content='nTrance | FFXIV Addons'/>
        <meta name='description' content='Tracks latest versions of specific ffxiv related github repositories' />
      </Head>

      <main>
        <Center textAlign='center' h='10rem'>
          <VStack spacing={4}>
            <Breadcrumb w='full' textAlign='left' mb={2}>
              <BreadcrumbItem>
                <Link passHref href='/'>
                  <BreadcrumbLink>Home</BreadcrumbLink>
                </Link>
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

export async function getServerSideProps({ req }) {
  let data = null;
  // Comment this to the end of the if statement when doing local dev
  const r = await client.query({
    query: repoQuery
  })
  if (r.networkError) {
    data = { statusCode: r.networkError.statusCode, errorType: 'network' };
  } else if (r.graphQLErrors) {
    data = { errorType: 'graphQL' };
  } else {
    data = r.data;
    logger.info(data.rateLimit);
  }
  return {
    props: {
      data,
      cookies: req.headers.cookie ?? '',
    },
  };
}

export default FFXIVAddons;
