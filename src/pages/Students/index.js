import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { Header } from './styles';

import api from '~/services/api';

export default function Students() {
  // useEffect(() => {
  //   async function loadStudents() {
  //     const response = await api.get('/students');
  //     return response;
  //   }
  // }, []);
  const [student, setStudent] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('/students');
      console.tron.log(response.data.students);
      setStudent(response.data.students);
    }
    loadStudents();
  }, []);

  return (
    <>
      <Header>
        <h1>Gerenciamento de alunos</h1>
        <button type="submit">teste</button>
      </Header>
      <div>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-EMAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>
          {student.map(s => (
            <tbody key={s.id}>
              <tr>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>
                <td>
                  <Link to={`/students/edit/${s.id}`}>editar</Link>
                </td>
                <td>
                  <Link to={`/students/edit/${s.id}`}>excluir</Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
