import { Container } from '@chakra-ui/layout';
import Header from '../Header/Header';

export const Layout = ({ children }: { children: React.ReactChild }): JSX.Element => {
  return (
    <Container
      maxW="container.xl"
      maxH="full"
      minH="100vh"
      m="0 auto"
      px="1rem"
      bgColor="secondary"
      color="primary"
    >
      <Header />
      {children}
    </Container>
  );
};
