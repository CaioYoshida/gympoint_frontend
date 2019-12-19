import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { MdAccountBox, MdSearch } from 'react-icons/md';

import api from '~/services/api';

import { Container, Menu, SearchBox, List } from './styles';

export default function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const { data } = response;

      setStudents(data);
    }
    loadStudents();
  }, [students]);

  async function handleDelete(id) {
    await api.delete(`students/${id}`);
  }

  return (
    <Container>
      <div>
        <span>Gerenciamento de Alunos</span>
        <Menu>
          <Link to="/students/add">
            <MdAccountBox size={24} color="#FFF" />
            CADASTRAR
          </Link>
          <SearchBox>
            <MdSearch size={24} color="#999" />
            <input type="text" placeholder="Buscar Aluno" />
          </SearchBox>
        </Menu>
      </div>
      <List>
        <tr>
          <th>NOME</th>
          <th>EMAIL</th>
          <th id="age">IDADE</th>
          <th />
        </tr>
        {students.map(student => (
          <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td className="age_td">{student.age}</td>
            <td className="options">
              <button type="button" className="editar">
                editar
              </button>
              <button
                type="button"
                onClick={() => handleDelete(student.id)}
                className="apagar"
              >
                apagar
              </button>
            </td>
          </tr>
        ))}
      </List>
    </Container>
  );
}
