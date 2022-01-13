import './styles/App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Login from "./login";
import Register from "./register";
import User from "./user";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/user" element={ <User /> } />
      </Routes>
    </div>
  );
}

export default App;
