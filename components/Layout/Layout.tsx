import { Container } from '@chakra-ui/layout';

export const Layout = ({ children }: { children: React.ReactChild }): JSX.Element => {
  return (
    <Container
      maxWidth="full"
      maxHeight="full"
      minHeight="100vh"
      margin={0}
      padding={0}
      backgroundColor="secondary"
      color="primary"
    >
      <div className="content">{children}</div>
    </Container>
  );
};
