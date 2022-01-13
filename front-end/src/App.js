import React, { useState, useEffect } from 'react';
import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import User from "./user";
import Header from './components/Header';

function App() {
  const [statelogin, setStateLogin] = useState(false);

  useEffect(() => {
    const isLogged = JSON.parse(localStorage.getItem('fishstore'))

    if (isLogged !== null) {
      setStateLogin(true);
    } else {
      setStateLogin(false);
    }
  }, [])

  return (
    <div className="App">
      <Header stateLogin={ statelogin } execFunction={ setStateLogin } />
      <Routes>
        <Route path="/" element={ <Home execFunction={ setStateLogin } /> } />
        <Route path="/login" element={ <Login execFunction={ setStateLogin } /> } />
        <Route path="/register" element={ <Register execFunction={ setStateLogin } /> } />
        <Route path="/user" element={ <User /> } />
      </Routes>
    </div>
  );
}

export default App;
