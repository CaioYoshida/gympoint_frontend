import React from 'react';
import { Link } from 'react-router-dom';

import { MdPlaylistAdd, MdCheckCircle, MdRemoveCircle } from 'react-icons/md';

import { Container, Menu, List } from '../styles';

export default function Enrollment() {
  return (
    <Container>
      <div>
        <span>Gerenciamento de Matriculas</span>
        <Menu>
          <Link to="/students">
            <MdPlaylistAdd size={24} color="#FFF" />
            CADASTRAR
          </Link>
        </Menu>
      </div>
      <List>
        <tr>
          <th>ALUNO</th>
          <th className="center">PLANO</th>
          <th className="center">INICIO</th>
          <th className="center">TERMINO</th>
          <th className="center">ATIVA</th>
          <th />
        </tr>
        <tr>
          <td>Caio Yoshida</td>
          <td className="center">START</td>
          <td className="center">15 de Dezembro de 2019</td>
          <td className="center">15 de janeiro de 2020</td>
          <td className="center">
            <MdCheckCircle size={24} color="#42CB59" />
          </td>
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
          <td className="center">GOLD</td>
          <td className="center">20 de janeiro de 2019</td>
          <td className="center">20 de Abril de 2019</td>
          <td className="center">
            <MdRemoveCircle size={24} color="#ddd" />
          </td>
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
          <td className="center">DIAMOND</td>
          <td className="center">18 de Outubro de 2019</td>
          <td className="center">18 de Abril de 2019</td>
          <td className="center">
            <MdCheckCircle size={24} color="#42CB59" />
          </td>
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
