import React, { useState } from 'react';
import Button from './components/ComponentsForm/Button';
import Input from './components/ComponentsForm/Input';
import './styles/user.css'

function User() {
  const [statecadProd, setStatecadProd] = useState({
    file: '',
    title: '',
    price: '',
    desc: ''
  })

  function handleChange({ target }) {
    const { name, value } = target;
    setStatecadProd({
      ...statecadProd,
      [name]: value
    })
  }

  return (
    <div className="style-user">
      <h3>Bem vindo: UserName</h3>
      <Input
        type="file"
        id="file"
        name="file"
        autoComplete="off"
        placeholder="Escola uma imagem"
        execFunction={ handleChange }
      />
      <Input
        type="text"
        id="title"
        name="title"
        autoComplete="off"
        placeholder="Titulo"
        execFunction={ handleChange }
      />
      <Input
        type="price"
        id="price"
        name="price"
        autoComplete="off"
        placeholder="Preço"
        execFunction={ handleChange }
      />
      <textarea
        className="desc"
        name="desc"
        id="desc"
        cols="57" rows="10"
        placeholder="Digite aqui a descrição do produto."
      />
      <Button title="Adicionar produto" />
    </div>
  )
}

export default User;
