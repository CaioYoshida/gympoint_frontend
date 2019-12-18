import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { MdArrowBack, MdSave } from 'react-icons/md';

import { Wrapper, MenuForm } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Campo Obrigatório'),
  email: Yup.string()
    .email('Insira um email válido')
    .required('Campo Obrigatório'),
  age: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .integer()
    .required('Campo Obrigatório'),
  height: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .required('Campo Obrigatório'),
  weight: Yup.number()
    .typeError('Valor inválido')
    .positive()
    .required('Campo Obrigatório'),
});

export default function StudentForm() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <Wrapper>
      <div>
        <h1>Cadastro de Aluno</h1>
        <MenuForm>
          <Link to="/students">
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
        <label htmlFor="name">NOME COMPLETO</label>
        <Input name="name" type="text" />
        <label htmlFor="email">SEU ENDERECO DE E-MAIL</label>
        <Input name="email" type="email" />
        <div>
          <div style={{ marginRight: '10px' }}>
            <label htmlFor="name">IDADE</label>
            <Input name="age" type="number" />
          </div>
          <div style={{ marginLeft: '10px', marginRight: '10px' }}>
            <label htmlFor="name">PESO (em kg)</label>
            <Input name="weight" type="number" step="0.1" />
          </div>
          <div style={{ marginLeft: '10px' }}>
            <label htmlFor="name">ALTURA</label>
            <Input name="height" type="number" step="0.01" />
          </div>
        </div>
      </Form>
    </Wrapper>
  );
}
