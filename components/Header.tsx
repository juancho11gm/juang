/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Heading } from '@chakra-ui/react';

const name = 'Juan G';

export const Header = () => {
  return (
    <Heading
      css={{
        color: 'blue'
      }}
      as="h1"
    >
      {name}
    </Heading>
  );
};
