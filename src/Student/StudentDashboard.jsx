import { useState,useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './All.css'
import './StudentDashboard.css';
import Sticky from 'react-stickynode';
import axios from 'axios';

function SidebarDashboard({token,onLogout}){
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const date=new Date().toLocaleDateString('en-us',{year:"numeric",month:"short",day:"numeric"})
  const currday=new Date().toLocaleDateString('en-us',{weekday:"long"})
  
  const d=new Date();
  const t=d.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})

// session


const [userData, setUserData] = useState(null);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/user-data', {
        headers: {
          Authorization: token,
        },
      });

      setUserData(response.data);
    } catch (error) {
      console.error('Failed to fetch user data:', error.message);
      onLogout(); // Log the user out if there's an error fetching data
    }
  };

  fetchUserData();
}, [token, onLogout]);

useEffect(() => {
  const sessionTimer = setTimeout(() => {
    onLogout(); // Log the user out when the session expires
  }, 60*60 * 1000); // 24 hours in milliseconds

  return () => clearTimeout(sessionTimer);
}, [onLogout]);

const handleLogout = () => {
  onLogout(); // Log the user out manually
};

  console.log(date);
  const OpenSidebar = () => {

  
  setOpenSidebarToggle(!openSidebarToggle)
  }
  return(
    <div>
    {userData && userData.role === 'student' ? (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sticky><Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} className="scroll"/></Sticky>
      <div className='para'>
       <h3>Student Dashboard</h3>
      <div className='pending-tasks'><h6>Pending Tasks</h6><p>0 Pending Tasks For Submission</p></div>
      <div className='three-cards'>
        <div className='notice'>NOTICE</div>
        <div className='feepayment'>FEE PAYMENT</div>
        <div className='attendence'>ATTENDENCE</div>
      </div>
      <div className='time-table'>
        <div className='heading'><h6>Time-Table</h6></div>
        <div className='schedule-lecture'><h6>Today's Lectures</h6></div>
        <div className='lecutre-table'>
          <table>
            <tr>
              <th>{currday}</th>
              <th>{date}</th>
            </tr>
            <tr>
              <td>09:00 AM-10:00 AM</td>
              <td>Computer Architecture</td>
            </tr>
            <tr>
              <td>10:00 AM-11:00 AM</td>
              <td>Applied Mathematics</td>
            </tr>
            <tr>
              <td>11:00 AM-12:00 PM</td>
              <td>Computer Graphics</td>
            </tr>
            <tr>
             <td>12:00 PM-01:00 PM</td>
             <td>Design Analysis and Algorithm</td>
            </tr>
            <tr>
              <td>02:00 PM-03:00 PM</td>
              <td>Machine Learning </td>
            </tr>
            <tr>
              <td>03:00 PM-04:00 PM</td>
              <td>Data Strucutres</td>
            </tr>
            
        </table>
        </div>
      </div>
      </div>
    </div>
    ) : (
      <p>You do not have access to the dashboard.</p>)}
    </div>
  );
};
export default SidebarDashboard;