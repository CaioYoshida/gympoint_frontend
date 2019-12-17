import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdArrowBack, MdSave } from 'react-icons/md';

import { Wrapper, MenuForm } from './styles';

export default function StudentForm() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Wrapper>
      <div>
        <span>Cadastro de Aluno</span>
        <MenuForm>
          <Link to="/students">
            <MdArrowBack size={24} color="#FFF" />
            VOLTAR
          </Link>
          <button type="submit">
            <MdSave size={24} color="#FFF" />
            SALVAR
          </button>
        </MenuForm>
      </div>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">NOME COMPLETO</label>
        <Input name="name" type="text" />
        <label htmlFor="email">SEU ENDERECO DE E-MAIL</label>
        <Input name="email" type="email" />
        <div>
          <div>
            <label htmlFor="name">IDADE</label>
            <Input name="age" type="number" />
          </div>
          <div>
            <label htmlFor="name">PESO (em kg)</label>
            <Input name="weight" type="number" />
          </div>
          <div>
            <label htmlFor="name">ALTURA</label>
            <Input name="height" type="number" />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}
