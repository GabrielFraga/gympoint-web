import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';

import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaCheck } from 'react-icons/fa';
import history from '~/services/history';
import api from '~/services/api';
import {
  Container,
  Header,
  ConfirmButton,
  BackButton,
  FirstSection,
  SecondSection,
} from './styles';

// import { Container } from './styles';

export default function AddPlan() {
  const [total, setTotal] = useState([0]);

  function handleSubmit() {}

  return (
    <>
      <Header>
        <h1>Cadastro de planos</h1>
        <div>
          <Link to="/plans">
            <BackButton type="submit">
              <FaChevronLeft size={16} color="#fff" />
              <span>VOLTAR</span>
            </BackButton>
          </Link>
          <ConfirmButton form="addPlan" type="submit">
            <FaCheck size={16} color="#fff" onClick={handleSubmit} />
            <span>SALVAR</span>
          </ConfirmButton>
        </div>
      </Header>
      <Container>
        <Form
          id="addPlan"
          // schema={schema}
          onSubmit={handleSubmit}
        >
          <FirstSection>
            <label>
              TÍTULO DO PLANO
              <Input type="text" name="title" />
            </label>
          </FirstSection>
          <SecondSection>
            <label>
              DURAÇÃO
              <Input type="text" name="duration" />
            </label>
            <label>
              PREÇO MENSAL
              <Input type="text" name="price" />
            </label>
            <label>
              PREÇO TOTAL
              <Input type="text" name="total" value={total} />
            </label>
          </SecondSection>
        </Form>
      </Container>
    </>
  );
}
