import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

const iconsSize = { width: '2rem', height: '2rem' };

const iconsHoverStyles = {
  color: 'quaternary'
};

const Footer = (): JSX.Element => (
  <Container maxW="full" color="secondary" p="0">
    <svg width="100%" viewBox="0 0 10 1">
      <polygon stroke="none" strokeWidth="0" fill="#0b3765" points="0,0.6 0,1 10,1 10,0"></polygon>
    </svg>
    <Box bgColor="tertiary">
      <footer>
        <Flex justifyContent="center">
          <Link href="https://github.com/juancho11gm" _hover={iconsHoverStyles}>
            <AiFillGithub style={iconsSize} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/juansebastiangonzalezm/"
            _hover={iconsHoverStyles}
          >
            <AiFillLinkedin style={iconsSize} />
          </Link>
          <Link href="https://twitter.com/juancho_11gm" _hover={iconsHoverStyles}>
            <AiFillTwitterCircle style={iconsSize} />
          </Link>
        </Flex>
      </footer>
    </Box>
  </Container>
);

export default Footer;
