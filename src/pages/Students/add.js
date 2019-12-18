import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FaChevronLeft, FaCheck } from 'react-icons/fa';

import {
  Header,
  ConfirmButton,
  BackButton,
  Form,
  FirstSection,
  SecondSection,
} from './styles';

import api from '~/services/api';

export default function AddStudent() {
  return (
    <>
      <Header>
        <h1>Cadastro de alunos</h1>
        <div>
          <Link to="/students">
            <BackButton type="submit">
              <FaChevronLeft size={16} color="#fff" />
              <span>VOLTAR</span>
            </BackButton>
          </Link>
          <ConfirmButton type="submit">
            <FaCheck size={16} color="#fff" />
            <span>SALVAR</span>
          </ConfirmButton>
        </div>
      </Header>
      <div>
        <Form>
          <FirstSection>
            <label>
              NOME COMPLETO
              <input type="text" />
            </label>
            <label>
              ENDERECO DE E-MAIL
              <input type="text" />
            </label>
          </FirstSection>
          <SecondSection>
            <label>
              IDADE
              <input type="text" />
            </label>
            <label>
              PESO (em kg)
              <input type="text" />
            </label>
            <label>
              ALTURA
              <input type="text" />
            </label>
          </SecondSection>
        </Form>
      </div>
    </>
  );
}
