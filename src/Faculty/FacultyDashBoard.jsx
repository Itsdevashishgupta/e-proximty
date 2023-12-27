import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

import img from '../Images/mam.jpg';

import img1 from '../Images/student.png';
import './FacultyDashBoard.css';
function Sidebar(){
  return(
    <>
    <div style={{display:'flex', height: '100vh', overflow: 'scroll initial' }}>
      {/* ----------------SideBar----------------*/}
      <div className='sideBarContainer'>
      <CDBSidebar textColor="#fff" backgroundColor="#492BA0">

        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
             E-Proximity
          </a>
        </CDBSidebarHeader>
        
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/attendance" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Attendance</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Project</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Assignment</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="exclamation-circle">Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      </div>
     <div className='FacultyRightSection'>
     {/* ------------UpperMenu--------------- */}
       <div className='menu'>
           <div className='DashBoardprofile'>
             <div className='DashBoardProfileImageOuter'>
                   <img src={img1} className='DashBoardProfileImage'/>
             </div>
           </div>
       </div>

       {/* ----------------DashBoardContent Part------------------ */}
       <div className='FacultyDashBoardContent'>
            <h3>Today's Schedule</h3>
            <div className='ScheduleChartOuter'>
               <table>
                 <tr>
                   <th>Time</th>
                   <th>Lecture</th>
                   <th>Year</th>
                 </tr>
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr>
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr> 
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr>
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr>
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr>
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr>
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr> 
                 <tr>
                   <td>10AM TO 11AM</td>
                   <td>COA(Room-F203)</td>
                   <td>2nd Year</td>
                 </tr>
               </table>
            </div>
       </div>
   </div>
   </div>
   </>
  );
};

export default Sidebar;
