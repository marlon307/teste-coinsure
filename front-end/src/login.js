import React from 'react'
import Button from './components/ComponentsForm/Button';
import InputText from './components/ComponentsForm/InputText';
import './styles/login.css'

function login() {
  return (
    <div className="style-login">
      <h1>Login</h1>
      <form>
        <InputText type="email" id="email" name="email" placeholder="Email" />
        <InputText type="password" id="psw" name="psw" placeholder="Senha" />
        <Button title="Logar" />
      </form>
    </div>
  )
}

export default login
