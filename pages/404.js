import { Text, HStack, Center, Divider } from '@chakra-ui/react';

const ErrorPage = () => (
  <Center h='100%'>
    <HStack>
      <Text fontSize='lg'>404</Text>
      <Divider h='3rem' orientation='vertical'/>
      <Text>This page does not exist (yet)</Text>
    </HStack>
  </Center>
)

export default ErrorPage;