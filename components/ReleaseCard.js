import React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Flex,
  Spacer,
  Center,
  Text,
  VStack,
  Button,
  Link,
  SimpleGrid,
  Stat,
  StatGroup,
  StatLabel,
  StatHelpText,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Table,
  Tbody,
  Tr,
  Td,
  Badge,
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { formatBytes } from './helpers';

const ReleaseCard = React.memo((props) => {
  const { author, publishedAt, tagName, description, releaseAssets, repository, url, isUpdated } = props;

  const assets = releaseAssets.nodes.map((el) => (
    <Tr key={`tr-${el.name}`}>
      <Td>
        <Flex w='full' wrap='wrap' align='center'>
          <Link href={el.downloadUrl}>
            <Button variant='link'>
              <Text isTruncated>{el.name}</Text>
            </Button>
          </Link>
          <Spacer />
          <Text fontSize='sm'>{formatBytes(el.size)}</Text>
        </Flex>
      </Td>
    </Tr>
  ));

  return (
    <Box mb={2} boxShadow={'xl'} rounded={'lg'} bg={useColorModeValue('white', 'gray.900')} p={6}>
      <SimpleGrid w={'full'} columns={{ sm: 1, md: 2 }} spacing={5} mb={4}>
        <Center>
          <VStack spacing={0}>
            <Box mb={2}>
              <Image
                src={author.avatarUrl}
                alt={`${repository.name} Avatar`}
                width={64}
                height={64}
                className='releasecard-avatarimg'
              />
            </Box>
            {/* <Avatar size={'lg'} src={author.avatarUrl} alt={'Avatar Alt'} mb={2} /> */}
            <Heading fontSize={'lg'} fontFamily={'body'}>
              <Link href={repository.url} target='_blank'>
                {repository.name}
              </Link>
            </Heading>
            <Text color={'gray.500'} mb={4}>
              {author.login}
            </Text>
          </VStack>
        </Center>
        <Center>
          <VStack w='full' spacing={2}>
            {isUpdated && (
              <Flex w='full' textAlign='right' alignItems='center' justifyContent='flex-end' mb={5}>
                <Badge variant='subtle' colorScheme='green'>
                  Updated
                </Badge>
              </Flex>
            )}
            <StatGroup w='full'>
              <Stat>
                <StatLabel>Version</StatLabel>
                <StatHelpText>
                  <Link href={url} target='_blank'>
                    {tagName}
                  </Link>
                </StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Published</StatLabel>
                <StatHelpText>{new Date(publishedAt).toDateString()}</StatHelpText>
              </Stat>
            </StatGroup>
          </VStack>
        </Center>
      </SimpleGrid>
      <Table variant='simple' size='sm' p={2} mb={5}>
        <Tbody>{assets}</Tbody>
      </Table>
      <Accordion allowToggle>
        <AccordionItem border='none'>
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                Changelog
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <ReactMarkdown>{description}</ReactMarkdown>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
});

ReleaseCard.displayName = 'ReleaseCard';

export default ReleaseCard;
