import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function HelpOrders() {
  const [order, setOrder] = useState([]);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function loadHelpOrder() {
      const response = await api.get('/students/help-orders');
      setOrder(response.data.order);
    }
    loadHelpOrder();
  }, []);

  return (
    <Container>
      {/* {console.tron.log(student)} */}
      <header />
      <Content>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          <tbody>
            {order.map(s => (
              <tr key={s.id}>
                <td>{s.student_name}</td>
                <td>
                  <button type="button">responder</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
