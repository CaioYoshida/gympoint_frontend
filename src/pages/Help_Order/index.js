import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container, List } from './styles';
import AnswerBox from '~/components/AnswerBox';

export default function Help_Order() {
  const [helpOrders, setHelpOrders] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('help-orders');

      setHelpOrders(response.data);
    }
    loadHelpOrders();
  }, []);

  async function handleAnswer() {
    console.tron.log('Responder pergunta');
  }

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
        {helpOrders.map(helpOrder => (
          <tr>
            <td>{helpOrder.student.name}</td>
            <td className="answer">
              <button type="button" onClick={() => handleAnswer()}>
                responder
              </button>
            </td>
          </tr>
        ))}
      </List>
      <AnswerBox />
    </Container>
  );
}
