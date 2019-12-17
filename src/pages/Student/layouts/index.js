import React from 'react';
import { Link } from 'react-router-dom';

import { MdAccountBox, MdSearch } from 'react-icons/md';

import { Container, Menu, SearchBox, List } from '../styles';

export default function Student() {
  return (
    <Container>
      <div>
        <span>Gerenciamento de Alunos</span>
        <Menu>
          <Link to="/students">
            <MdAccountBox size={24} color="#FFF" />
            CADASTRAR
          </Link>
          <SearchBox>
            <MdSearch size={24} color="#999" />
            <input type="text" placeholder="Buscar Aluno" />
          </SearchBox>
        </Menu>
      </div>
      <List>
        <tr>
          <th>NOME</th>
          <th>EMAIL</th>
          <th id="age">IDADE</th>
          <th />
        </tr>
        <tr>
          <td>Caio Yoshida</td>
          <td>caio.yoshida@yahoo.com</td>
          <td className="age_td">28</td>
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
          <td>Juliana Yoshida</td>
          <td>juliana.yoshida@yahoo.com</td>
          <td className="age_td">28</td>
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
          <td>Gabrielle Yoshida</td>
          <td>gabrielle.yoshida@yahoo.com</td>
          <td className="age_td">22</td>
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
