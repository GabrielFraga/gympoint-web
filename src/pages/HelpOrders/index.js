import React, { useEffect, useState } from 'react';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function HelpOrders() {
  const [order, setOrder] = useState([]);
  const [student, setstudent] = useState([]);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get('/students/help-orders');
      // setOrder(response.data.order);
      console.tron.log(response.data.order);
    }
    // console.tron.log(order);

    //   const students = order.map(async or => {
    //     await api.get(`/students/${or.student_id}`);
    //   });
    //   setstudent(students);
    // };
    loadHelpOrders();
  }, [order]);

  return (
    <Container>
      <header />
      <Content>
        {/* <table>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          {student.map(s => (
            <tbody key={s.id}>
              <tr>
                <td>s.name</td>
                <td>
                  <button type="button">responder</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table> */}
      </Content>
    </Container>
  );
}
