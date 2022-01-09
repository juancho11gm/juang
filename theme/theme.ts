import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import Link from './LinkTheme';
import Button from './ButtonTheme';

const colors = {
  primary: '#1A202C',
  secondary: '#FFFFFF',
  tertiary: '#0B3765',
  quaternary: '#9E9E9E'
};

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

const components = {
  Link,
  Button
};

const theme = extendTheme({ config, colors, components });

export default theme;
