import './Login.css'
import React, { useState } from 'react';
import aithlogo from '../Images/aithlogo.png';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {MDBIcon} from 'mdb-react-ui-kit';
import axios from 'axios';
const Login=(props)=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });

      const { accessToken } = response.data;
     props.setToken(accessToken);
    } catch (error) {
      console.error('Login failed:', error.message);
    }

  };
    return(<div className='LoginOuter'>
      <nav className="logout">
        <a href='/' className='lg text-reset'>
          Go To Dashboard &nbsp;
          <MDBIcon fas icon="arrow-circle-right" />
        </a>
      </nav>
      <div className='container'>
        <img src={aithlogo} alt='logo'/>
        <h4>{props.name} Login</h4>
        <div>
          <div className='InputContainer'>
             <p>User Id</p>
             <input value={username} id="username" name="username" autoComplete="username"
             onChange={(e)=>setUsername(e.target.value)}
             type='text'/>
          </div>
          <div className='InputContainer'>
            <p>Password</p>
            <input value={password} id="password" name="password" autoComplete="current-password"
            onChange={(e)=>setPassword(e.target.value)}
            type='password'/>
          </div>
          <div className='Bottomform'>
            <button onClick={handleLogin} >Login</button>
            <div className='Links'>
              <p>Forgot password?</p>
            </div>
          </div>
          </div>
        <small className='copyright'> &copy; 2023 E-Proximity Reserved</small>
        </div>
      </div>)
}
export default Login;