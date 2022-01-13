import React, { useState, useEffect } from 'react';
import Button from './components/ComponentsForm/Button';
import Input from './components/ComponentsForm/Input';
import { useNavigate } from 'react-router-dom';
import serviceCreateProduct from './service/serviceCreateProduct'
import './styles/user.css';

function User() {
  const navigate = useNavigate();
  const [statecadProd, setStatecadProd] = useState({
    url: '',
    title: '',
    price: 0,
    description: '',
  })

  function handleChange({ target }) {
    const { name, value } = target;
    console.log(statecadProd.description);
    setStatecadProd({
      ...statecadProd,
      [name]: value
    });
  }

  async function handleClick() {
    const { url, title, price, description } = statecadProd;
    await serviceCreateProduct(url, title, price, description);
  }

  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('fishstore'))
    if (!isLogged) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="style-user">
      <h3>Bem vindo: UserName</h3>
      <Input
        type="text"
        id="file"
        name="url"
        autoComplete="off"
        placeholder="Insira uma url de imagem"
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
        name="description"
        id="desc"
        cols="57" rows="10"
        onChange={ handleChange }
        placeholder="Digite aqui a descrição do produto."
      />
      <Button title="Adicionar produto" execFunction={ handleClick } />
    </div>
  )
}

export default User;
