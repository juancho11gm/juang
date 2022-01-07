import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Footer from '../components/Footer/Footer';
import { Layout } from '../components/Layout/Layout';
import theme from '../theme/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
