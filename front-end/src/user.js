import React, { useState, useEffect } from 'react';
import Button from './components/ComponentsForm/Button';
import Input from './components/ComponentsForm/Input';
import { useNavigate } from 'react-router-dom';
import serviceCreateProduct from './service/serviceCreateProduct'
import './styles/user.css';

function User() {
  const navigate = useNavigate();
  const [fileUpload, setFileUpload] = useState({ name: '' });
  const [stateerror, setStateError] = useState(false);
  const [statecadProd, setStatecadProd] = useState({
    title: '',
    price: 0,
    description: '',
  })

  function changeImage({ target }) {
    setFileUpload(target.files[0]);
  }

  function handleChange({ target }) {
    const { name, value } = target;
    setStatecadProd({
      ...statecadProd,
      [name]: value
    });
  }

  async function handleClick() {
    const { title, price, description } = statecadProd;
    let file = fileUpload;
    if (fileUpload.name !== '' && title !== '' && title.length >= 8
      && price !== ''
      && description !== '' && description.length >= 15) {

      const data = new FormData();
      data.append('url', file);
      data.append('object', JSON.stringify(statecadProd));
      await serviceCreateProduct(data, title, price, description);

      setStateError(false);
      setFileUpload({ name: '' })
      setStatecadProd({
        title: '',
        price: 0,
        description: '',
      });
    } else {
      setStateError(true);
    }
  }

  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('fishstore'))
    if (!isLogged) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <form id="sendform" className="style-user" encType="multipart/form-data">
      <h3>Bem vindo: UserName</h3>
      <Input
        type="file"
        id="file"
        name="url"
        autoComplete="off"
        placeholder="Localize a imagem"
        execFunction={ changeImage }
      />
      <Input
        type="text"
        id="title"
        name="title"
        value={ statecadProd.title }
        autoComplete="off"
        placeholder="Titulo: min 8 caracteres"
        execFunction={ handleChange }
      />
      <Input
        type="price"
        id="price"
        name="price"
        value={ statecadProd.price }
        autoComplete="off"
        placeholder="Preço"
        execFunction={ handleChange }
      />
      <textarea
        className="desc"
        name="description"
        id="desc"
        value={ statecadProd.description }
        cols="57" rows="10"
        onChange={ handleChange }
        placeholder="Digite aqui a descrição do produto. min 15 caracteres"
      />
      <Button title="Adicionar produto" execFunction={ handleClick } />
      { stateerror && <span>Preencha todos os campos correctamente.</span> }
    </form>
  )
}

export default User;
