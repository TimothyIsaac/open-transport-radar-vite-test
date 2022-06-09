import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Button, ButtonProps, Flex, useColorMode } from '@chakra-ui/react';

export default function ColorModeToggle(props: ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
      <Button
        aria-label="Toggle Color Mode"
        onClick={toggleColorMode}
        _focus={{ boxShadow: 'none' }}
        w="fit-content"
        {...props}>
        {colorMode === 'light' ? <ArrowUpIcon /> : <ArrowDownIcon />}
      </Button>
  );
}