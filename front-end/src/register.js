import React from 'react'
import Button from './components/ComponentsForm/Button'
import InputText from './components/ComponentsForm/InputText'

function register() {
  return (
    <div className="style-login">
      <h1>Registrar-se</h1>
      <form>
        <InputText type="text" id="name" name="name" placeholder="Nome" />
        <InputText type="email" id="email" name="email" placeholder="Email" />
        <InputText type="password" id="psw" name="psw" placeholder="Senha" />
        <Button title="Registrar-se" />
      </form>
    </div>
  )
}

export default register
