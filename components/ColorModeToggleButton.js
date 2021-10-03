import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';

const ColorModeToggleButton = ({ colorMode, clickCallback }) => {
  const handleOnClick = () => {
    if (clickCallback) clickCallback();
  };

  return (
    <IconButton
      size='md'
      variant='outline'
      aria-label={colorMode === ' light' ? 'toggle dark mode' : 'toggle light mode'}
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      onClick={handleOnClick}
      m={2}
    />
  );
};

export default ColorModeToggleButton;
