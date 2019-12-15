import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FaPlus, FaSearch } from 'react-icons/fa';
import { Header, Button, Search } from './styles';

import api from '~/services/api';

export default function Students() {
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
        <div>
          <Button type="submit">
            <FaPlus size={16} color="#fff" />
            <span>CADASTRAR</span>
          </Button>
          <Search>
            <FaSearch size={16} color="#ccc" />
            <input type="text" placeholder="Buscar aluno" />
          </Search>
        </div>
      </Header>
      <div>
        <table>
          <thead>
            <tr>
              <th>NOME</th>
              <th>E-MAIL</th>
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
                  <Link
                    style={{ color: '#e77575' }}
                    to={`/students/edit/${s.id}`}
                  >
                    excluir
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}
