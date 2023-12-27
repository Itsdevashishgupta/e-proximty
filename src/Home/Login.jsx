import './Login.css'
import aithlogo from '../Images/aithlogo.png';
import bg from '../Images/bg.jpg';
import { useState } from 'react';
function Studentlogin(props){
  const[userid,setuserid]=useState("");
  const[password,setpassword]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
    //Run your login API fucntions here \
    //I will just run an alert to show that the eamil and password are being captured
    alert(email+password);
  };
    return<>
      <div className='container'>
        <img src={aithlogo} alt='logo'/>
        <h4>{props.name} Login</h4>
        <form onSubmit={(e)=>e.handleSubmit(e)}>
          <div className='InputContainer'>
             <p>User Id</p>
             <input value={userid}
             onChange={(e)=>setuserid(e.target.value)}
             type='text'/>
          </div>
          <div className='InputContainer'>
            <p>Password</p>
            <input value={password}
            onChange={(e)=>setpassword(e.target.value)}
            type='password'/>
          </div>
          <div className='Bottomform'>
            <button type='submit'>Login</button>
            <div className='Links'>
              <p>New Users?</p>
              <p>Forgot Password?</p>
            </div>
          </div>
        </form>
        <small className='copyright'> &copy; 2023 E-Proximity Reserved</small>
      </div>
    </>
}
export default Studentlogin;