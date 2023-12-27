import './FeeDetails.css';
import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Sticky from 'react-stickynode';
import Dropdown from 'react-bootstrap/Dropdown';
import './All.css';
function FeeDetails(){
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
    const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
    return(
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sticky><Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} className="scroll"/></Sticky>
            <div className='feild-wrapper'><h3>Fee Details</h3>
            <div className='dropdown-list'>
            <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic" className='Dropdown-box'>
                Select Recipet Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Registration Fee</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Academic Fee</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Examination Fee</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>
            </div>
            
        </div>
    )
}
export default FeeDetails;