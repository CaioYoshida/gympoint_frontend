import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdArrowBack, MdSave } from 'react-icons/md';

import { Wrapper, MenuForm, TotalPrice } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Informação Obrigatória'),
  duration: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .integer()
    .required('Informarção Obrigatória'),
  price: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .required('Informação Obrigatória'),
});

export default function MembershipForm() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Wrapper>
      <div>
        <h1>Cadastro de Plano</h1>
        <MenuForm>
          <Link to="/memberships">
            <MdArrowBack size={24} color="#FFF" />
            VOLTAR
          </Link>
          <button type="submit" form="my-form">
            <MdSave size={24} color="#FFF" />
            SALVAR
          </button>
        </MenuForm>
      </div>
      <Form id="my-form" schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="title">TITULO DO PLANO</label>
        <Input name="title" type="text" />
        <div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="duration">DURAÇÃO (em meses)</label>
            <Input name="duration" type="number" />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="price">PREÇO MENSAL</label>
            <Input name="price" type="number" step="0.01" />
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
