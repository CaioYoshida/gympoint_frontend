import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { Container, Menu, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <Menu>
          <img src={logo} alt="gympoint" />
          <div>
            <Link to="/students">ALUNOS</Link>
            <Link to="/memberships">PLANOS</Link>
            <Link to="/enrollments">MATRICULAS</Link>
            <Link to="/help_orders">PEDIDOS DE AUXILIO</Link>
          </div>
        </Menu>
        <Profile>
          <strong>Caio Yoshida</strong>
          <button type="button">sair do sistema</button>
        </Profile>
      </div>
    </Container>
  );
}
