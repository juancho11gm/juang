import { extendTheme } from '@chakra-ui/react';
import Link from './LinkTheme';

const Button = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: () => ({
      bg: 'tertiary',
      color: 'secondary',
      _hover: {
        boxShadow: 'lg'
      }
    })
  },
  defaultProps: {}
};

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#FFFFFF'
      }
    }
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    primary: '#1A202C',
    secondary: '#FFFFFF',
    tertiary: '#0B3765',
    quaternary: '#9E9E9E'
  },
  components: {
    Link,
    Button
  }
});

export default theme;
