import React from 'react'
import './All.css'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import menuProfileImage from '../Images/mam.jpg';
function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-right'>
          <span>Student Name</span>&nbsp;&nbsp;
          <img src={menuProfileImage}/>
        </div> 
    </header>
  )
}

export default Header