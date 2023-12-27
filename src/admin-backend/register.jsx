// src/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './register.css'

const Register = ({ setToken }) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('student'); // Default role is student

  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
       alert("PASSWORD NOT MATCH");
        return;
      }

      const response = await axios.post('http://localhost:3000/register', {
        name,
        username,
        password,
        role,
      });

      alert("success");
      const { accessToken } = response.data;
      setToken(accessToken);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      <div>
        <label>Name:</label>
        <input className='form-control' type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Name'/>
      </div>
      <div>
        <label>Username:</label>
        <input className=' form-control' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter UserName'/>
      </div>
      <div>
        <label>Password:</label>
        <input className=' form-control' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input className=' form-control' type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirm Password'/>
      </div>
      <div>
        <label>Role:</label>
        <select className=' form-control' value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="faculty">Faculty</option>
          <option value="student">Student</option>
        </select>
      </div>
      <button  onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
