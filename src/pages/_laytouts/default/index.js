import React from 'react';

import Header from '~/components/Header/index';

import { Container } from './styles';

export default function Default({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}
