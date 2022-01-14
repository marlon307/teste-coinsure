import React, { useState } from 'react';
import Button from './components/ComponentsForm/Button';
import { useNavigate } from 'react-router-dom';
import InputText from './components/ComponentsForm/Input';
import serviceLoginUser from './service/serviceLoginUser';
import './styles/login.css';

function Login({ execFunction }) {
  const [errormessage, setErrormessage] = useState(false);
  const navigate = useNavigate();
  const [statelogin, setStateLogin] = useState({
    email: '',
    password: ''
  });

  function handleChange({ target }) {
    const { name, value } = target;
    setStateLogin({
      ...statelogin,
      [name]: value
    })
  }

  async function handleClick() {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/igm;

    if (validEmail.test(statelogin.email) && statelogin.password.length >= 8) {
      const fetchLogin = await serviceLoginUser(statelogin.email, statelogin.password);
      if (fetchLogin.status === 200) {

        localStorage.setItem('fishstore', JSON.stringify({
          logged: true,
        }));
        execFunction(true);
        navigate('/user');
        setErrormessage(false);
      } else {
        setErrormessage(true);
      }
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
          value={ statelogin.email }
          placeholder="Email"
          execFunction={ handleChange }
          autoComplete="email"
        />
        <InputText
          type="password"
          id="psw"
          name="password"
          value={ statelogin.password }
          placeholder="Senha"
          execFunction={ handleChange }
          autoComplete="password"
        />
        <Button title="Logar" execFunction={ handleClick } />
        { errormessage && <p>Email ou senha incorretos!</p> }
      </form>
    </div>
  )
}

export default Login;
