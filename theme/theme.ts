import { extendTheme } from '@chakra-ui/react';

const Link = {
  baseStyle: {
    fontWeight: '500',
    textAlign: 'center',
    p: '1rem',
    d: 'block',
    _hover: {
      textDecoration: 'none'
    }
  },
  sizes: {},
  variants: {},
  defaultProps: {}
};

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    primary: '#0b3765',
    secondary: '#FFFFFF'
  },
  components: {
    Link
  }
});

export default theme;
