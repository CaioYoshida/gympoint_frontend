import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdArrowBack, MdSave } from 'react-icons/md';

import { Wrapper, MenuForm, TotalPrice, EndDate } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O aluno é obrigatório'),
  membership: Yup.string().required('O plano é obrigatório'),
  start_date: Yup.date().required('A data de início é obrigatório'),
});

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
          <button type="submit" form="my-form">
            <MdSave size={24} color="#FFF" />
            SALVAR
          </button>
        </MenuForm>
      </div>
      <Form schema={schema} onSubmit={handleSubmit} id="my-form">
        <label htmlFor="name">ALUNO</label>
        <Input name="name" type="text" />
        <div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="membership">PLANO</label>
            <Input
              name="membership"
              type="number"
              placeholder="Selecione o plano"
            />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="start_date">DATA DE INÍCIO</label>
            <Input name="start_date" type="date" placeholder="Escolha a data" />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="price">DATA DE TÉRMINO</label>
            <EndDate />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="price">VALOR FINAL</label>
            <TotalPrice />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}
