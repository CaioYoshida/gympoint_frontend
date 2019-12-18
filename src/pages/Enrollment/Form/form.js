import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdArrowBack, MdSave } from 'react-icons/md';

import { Wrapper, MenuForm, TotalPrice, EndDate } from './styles';

export default function MembershipForm() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Wrapper>
      <div>
        <span>Cadastro de Matrícula</span>
        <MenuForm>
          <Link to="/memberships">
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
        <label htmlFor="name">ALUNO</label>
        <Input name="name" type="text" />
        <div>
          <div>
            <label htmlFor="membership">PLANO</label>
            <Input
              name="membership"
              type="number"
              placeholder="Selecione o plano"
            />
          </div>
          <div>
            <label htmlFor="start_date">DATA DE INÍCIO</label>
            <Input name="start_date" type="date" placeholder="Escolha a data" />
          </div>
          <div>
            <label htmlFor="price">DATA DE TÉRMINO</label>
            <EndDate />
          </div>
          <div>
            <label htmlFor="price">VALOR FINAL</label>
            <TotalPrice />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}
