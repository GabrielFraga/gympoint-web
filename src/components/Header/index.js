import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/logoMenor.svg';

import { Container, Content, Profile, Routes } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gympoint" />
          <Link to="/students">GYMPOINT</Link>
        </nav>
        <Routes>
          <Link to="/students">ALUNOS</Link>
          <Link to="/plans">PLANOS</Link>
          <Link to="/registrations">MATRICULAS</Link>
          <Link to="/help-orders">PEDIDOS DE AUXÍLIO</Link>
        </Routes>
        <aside>
          <Profile>
            <div>
              <strong>Administrador</strong>
              <Link to="/logout">Sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
