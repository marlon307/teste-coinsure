import React from 'react';
import Button from './components/ComponentsForm/Button';
import Input from './components/ComponentsForm/Input';
import './styles/user.css'

function User() {
  return (
    <div className="style-user">
      <h3>Bem vindo: UserName</h3>
      <Input
        type="file"
        id="file"
        name="file"
        autoComplete="off"
        placeholder="Escola uma imagem"
      />
      <Input
        type="text"
        id="title"
        name="title"
        autoComplete="off"
        placeholder="Titulo"
      />
      <Input
        type="price"
        id="price"
        name="price"
        autoComplete="off"
        placeholder="Preço"
      />
      <textarea className="desc" name="desc" id="desc" cols="60" rows="10"></textarea>
      <Button title="Adicionar produto" />
    </div>
  )
}

export default User;
