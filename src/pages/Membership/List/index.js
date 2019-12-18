import React from 'react';
import { Link } from 'react-router-dom';

import { MdPlaylistAdd } from 'react-icons/md';

import { Container, Menu, List } from './styles';

export default function Membership() {
  return (
    <Container>
      <div>
        <span>Gerenciamento de Planos</span>
        <Menu>
          <Link to="/memberships/add">
            <MdPlaylistAdd size={24} color="#FFF" />
            CADASTRAR
          </Link>
        </Menu>
      </div>
      <List>
        <tr>
          <th>TITULO</th>
          <th id="duracao">DURACAO</th>
          <th id="age">VALOR p/ MES</th>
          <th />
        </tr>
        <tr>
          <td>START</td>
          <td className="duracao_td">1 mes</td>
          <td className="valor_td">R$129,90</td>
          <td className="options">
            <button type="button" className="editar">
              editar
            </button>
            <button type="button" className="apagar">
              apagar
            </button>
          </td>
        </tr>
        <tr>
          <td>GOLD</td>
          <td className="duracao_td">3 meses</td>
          <td className="valor_td">R$109,90</td>
          <td className="options">
            <button type="button" className="editar">
              editar
            </button>
            <button type="button" className="apagar">
              apagar
            </button>
          </td>
        </tr>
        <tr>
          <td>DIAMOND</td>
          <td className="duracao_td">6 meses</td>
          <td className="valor_td">R$89,90</td>
          <td className="options">
            <button type="button" className="editar">
              editar
            </button>
            <button type="button" className="apagar">
              apagar
            </button>
          </td>
        </tr>
      </List>
    </Container>
  );
}
