/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, Stack, Link, useDisclosure } from '@chakra-ui/react';
import logoSrc from '../../assets/logo.png';

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding={6}>
      <Flex align="center" mr={5}>
        <Link href="/" textDecoration="none">
          <Image boxSize="49px" src={logoSrc.src} alt="JuanG logo" />
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <HamburgerIcon w={50} h={50} cursor={'pointer'} />
      </Box>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        justifyContent={{ base: 'right' }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link href="/">About me</Link>
        <Link href="/">Work</Link>
        <Link href="/">Projects</Link>
      </Stack>
    </Flex>
  );
};
