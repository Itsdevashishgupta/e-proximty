import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import photo from './logo.png'

function click(e){
  console.log(e.name);
}
const Navbar = () => {
   let [open,setopen]=useState(false)
  return (
    <>
   {/* <!-- Main navigation container --> */}
   <header className=' font-[Poppins] bg-[#492ba0]'>
      <nav className='font-[Poppins] md:flex justify-between items-center w-[95%] mx-auto  md:px-10 px-7 '>
        <div className='flex items-center'>
          <img className='w-16 cursor-pointer' src={photo} alt="Logo" />
        </div>
        <div className=' '>
        <div onClick={()=>setopen(!open)} 
        className=' text-3xl absolute right-8 top-6 md:hidden cursor-pointer'>
          <ion-icon name={open? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute 
        md:static md:w-auto w-full left-0 md:pl-0 pl-9
         transition-all duration-500 ease-in ${open? 'top-15':'top-[-490px]'} `}>
          <li className=' md:ml-8 text-lg my-7 md:my-0'><NavLink to="/" className="text-blue-900 hover:text-gray-500 no-underline text-white">
            Home
          </NavLink></li>
          <li className=' md:ml-8 text-lg my-7 md:my-0'><NavLink to="/vulna" className="text-blue-900 hover:text-gray-500 no-underline text-white">
             Vulnerabilities
          </NavLink></li>

        </ul> 
        </div>
      </nav>
      </header>
    </>
  )
}

export default Navbar