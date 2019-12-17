import React from 'react';

import { Container, List } from './styles';

export default function Help_Order() {
  return (
    <Container>
      <div>
        <span>Pedidos de Auxilio</span>
      </div>
      <List>
        <tr>
          <th>ALUNO</th>
          <th />
        </tr>
        <tr>
          <td>Caio Yoshida</td>
          <td className="answer">
            <button type="button">responder</button>
          </td>
        </tr>
        <tr>
          <td>Juliana Yoshida</td>
          <td className="answer">
            <button type="button">responder</button>
          </td>
        </tr>
        <tr>
          <td>Gabrielle Yoshida</td>
          <td className="answer">
            <button type="button">responder</button>
          </td>
        </tr>
      </List>
    </Container>
  );
}
