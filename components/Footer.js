import { Box, Text } from '@chakra-ui/react';

const Footer = () => (
  <Box textAlign='center' as='footer' role='contentinfo' mx='auto' w='full' py='12' px={{ base: '4', md: '8' }}>
    <Text fontSize='sm'>&copy; {new Date().getFullYear()} Another NextJS/Chakra UI/Serverless Project.</Text>
  </Box>
);

export default Footer;
