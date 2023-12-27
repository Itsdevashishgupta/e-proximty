import React from 'react'
import './All.css'
import 
{ BsGrid1X2Fill,BsFillGrid3X3GapFill,
  BsListCheck}
 from 'react-icons/bs'
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineRequestPage } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";
function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
              <FaSun className='icon_header'/> E-proximity
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="/studentdash">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <PiStudentFill className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Time-Table
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/feedetails">
                    <MdOutlineRequestPage className='icon'/> Fee Details
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Assignment
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <FaProjectDiagram className='icon'/> Project
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="/logout">
                <LuLogOut className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar