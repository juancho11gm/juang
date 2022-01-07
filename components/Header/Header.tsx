import { Box, Flex, Image, Stack, Link, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logoSrc from '../../assets/logo.png';

const Header = (): JSX.Element => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" py={6}>
      <Flex align="center">
        <Link href="/" p="0">
          <Image boxSize="49px" src={logoSrc.src} alt="JuanG logo" />
        </Link>
      </Flex>

      <Box display={{ base: 'block', sm: 'none' }} onClick={handleToggle}>
        <HamburgerIcon w={50} h={50} cursor="pointer" aria-label="hamburger menu" />
      </Box>

      <Stack
        direction={{ base: 'column', sm: 'row' }}
        display={{ base: isOpen ? 'block' : 'none', sm: 'flex' }}
        width={{ base: 'full', sm: 'auto' }}
        justifyContent="right"
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, sm: 0 }}
      >
        <Link href="/about">About me</Link>
        <Link href="/work">Work</Link>
        <Link href="/projects">Projects</Link>
      </Stack>
    </Flex>
  );
};

export default Header;
