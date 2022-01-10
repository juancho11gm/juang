import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import BalloonList from '../components/BalloonList/BalloonList';
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
      <BalloonList />
    </ChakraProvider>
  );
}

export default MyApp;
