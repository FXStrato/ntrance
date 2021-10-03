import React from 'react';
import { Center, Flex, Box, Heading, Spacer, useColorMode } from '@chakra-ui/react';
import ColorModeToggleButton from './ColorModeToggleButton';

const Nav = React.memo(() => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex>
      <Spacer />
      <Box>
        <ColorModeToggleButton colorMode={colorMode} clickCallback={toggleColorMode}/>
      </Box>
    </Flex>
  );
});

Nav.displayName = 'Nav';

export default Nav;
