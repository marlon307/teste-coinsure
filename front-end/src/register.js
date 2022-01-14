import React, { useState } from 'react';
import Button from './components/ComponentsForm/Button';
import Input from './components/ComponentsForm/Input';
import { useNavigate } from 'react-router-dom';
import serviceRegisterUser from './service/serviceRegisterUser';
import './styles/login.css';

function Register({ execFunction }) {
  const navigate = useNavigate();
  const [errormessage, setErrormessage] = useState(false);
  const [stateRegister, setStateRegister] = useState({
    name: '',
    email: '',
    password: ''
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setStateRegister({
      ...stateRegister,
      [name]: value
    })
  }

  async function handleClick() {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;
    const { email, password, name } = stateRegister;
    if (validEmail.test(email) && password.length >= 8 && name.length >= 8) {

      const fetchregisterUser = await serviceRegisterUser(name, email, password);

      if (fetchregisterUser.status === 200) {
        localStorage.setItem('fishstore', JSON.stringify({
          logged: true,
        }));

        execFunction(true);
        navigate('/user');
        setErrormessage(false);
      } else {
        setErrormessage(true)
      }
    }
  }

  return (
    <div className="style-login">
      <h1>Registrar-se</h1>
      <form autoComplete="off">
        <Input
          type="text"
          id="name"
          value={ stateRegister.name }
          name="name"
          autoComplete="name"
          placeholder="Nome"
          execFunction={ handleChange }
        />
        <Input
          type="email"
          id="email"
          value={ stateRegister.email }
          name="email"
          placeholder="Email"
          autoComplete="off"
          execFunction={ handleChange }
        />
        <Input
          type="password"
          id="psw"
          value={ stateRegister.password }
          name="password"
          autoComplete="off"
          placeholder="Senha"
          execFunction={ handleChange }
        />
        <Button title="Registrar-se" execFunction={ handleClick } />
        { errormessage && <p>Usuário já esta cadastrado!</p> }
      </form>
    </div>
  )
}

export default Register;
