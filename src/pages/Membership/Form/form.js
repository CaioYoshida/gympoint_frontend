import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { MdArrowBack, MdSave } from 'react-icons/md';

import { Wrapper, MenuForm, TotalPrice } from './styles';

export default function MembershipForm() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Wrapper>
      <div>
        <span>Cadastro de Plano</span>
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
        <label htmlFor="title">TITULO DO PLANO</label>
        <Input name="title" type="text" />
        <div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="duration">DURAÇÃO (em meses)</label>
            <Input name="duration" type="number" />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="price">PREÇO MENSAL</label>
            <Input name="price" type="number" />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="price">PREÇO TOTAL</label>
            <TotalPrice />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}
