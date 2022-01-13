import React, { useState } from 'react';
import Button from './components/ComponentsForm/Button';
import Input from './components/ComponentsForm/Input';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate()
  const [stateRegister, setStateRegister] = useState({
    name: '',
    email: '',
    psw: ''
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setStateRegister({
      ...stateRegister,
      [name]: value
    })
  }

  function handleClick() {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

    if (validEmail.test(stateRegister.email)
      && stateRegister.psw.length >= 8
      && stateRegister.name.length >= 8) {
      navigate('/user');
    }
  }

  return (
    <div className="style-login">
      <h1>Registrar-se</h1>
      <form autoComplete="off">
        <Input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          placeholder="Nome"
          execFunction={ handleChange }
        />
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          autoComplete="off"
          execFunction={ handleChange }
        />
        <Input
          type="password"
          id="psw" name="psw"
          autoComplete="off"
          placeholder="Senha"
          execFunction={ handleChange }
        />
        <Button title="Registrar-se" execFunction={ handleClick } />
      </form>
    </div>
  )
}

export default Register;
