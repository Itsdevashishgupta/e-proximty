// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../Login/Login.css';
import aithlogo from '../Images/aithlogo.png';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {MDBIcon} from 'mdb-react-ui-kit';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      const { accessToken } = response.data;
      setToken(accessToken);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (<>
    <nav className="logout">
    <a href='/' className='lg text-reset'>
      Go To Dashboard &nbsp;
      <MDBIcon fas icon="arrow-circle-right" />
    </a>
  </nav>
    <div className='container'>
    <img src={aithlogo} alt='logo'/>
        <h4>Student Login</h4>
        
      <h2>Login</h2>
      <div>
      <div className='InputContainer'>
        <p>Username</p>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
      </div>
      <div className='InputContainer'>
      <p>Password</p>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div></>
  );
};

export default Login;
