import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.png';
import { Container, Menu, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

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
          <strong>{profile.name}</strong>
          <button type="button">sair do sistema</button>
        </Profile>
      </div>
    </Container>
  );
}
