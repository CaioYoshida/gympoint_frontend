import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.png';

import { Container } from './styles';

export default function SignIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Container>
      <img src={logo} alt="gympoint" />

      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">SEU E-MAIL</label>
        <Input name="email" type="email" placeholder="Digite o seu e-mail" />
        <label htmlFor="password">SUA SENHA</label>
        <Input
          name="password"
          type="password"
          placeholder="Digite a sua senha"
        />
        <button type="submit">Entrar no sistema</button>
      </Form>
    </Container>
  );
}
