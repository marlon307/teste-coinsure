import React, { useState } from 'react';
import Button from './components/ComponentsForm/Button';
import InputText from './components/ComponentsForm/InputText';
import './styles/login.css'

function Login() {

  const [statelogin, setStateLogin] = useState({
    email: '',
    psw: ''
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setStateLogin({
      ...statelogin,
      [name]: value
    })
  }

  function handleClick() {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

    if (validEmail.test(statelogin.email) && statelogin.psw.length >= 8) {
      console.log('ok');
    }
  }

  return (
    <div className="style-login">
      <h1>Login</h1>
      <form>
        <InputText
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          execFunction={ handleChange }
          autoComplete="email"
        />
        <InputText
          type="password"
          id="psw"
          name="psw"
          placeholder="Senha"
          execFunction={ handleChange }
          autoComplete="password"
        />
        <Button title="Logar" execFunction={ handleClick } />
      </form>
    </div>
  )
}

export default Login;
