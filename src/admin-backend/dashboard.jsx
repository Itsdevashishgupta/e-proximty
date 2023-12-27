// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = ({ token, onLogout }) => {
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
    }, 60 * 1000); // 24 hours in milliseconds

    return () => clearTimeout(sessionTimer);
  }, [onLogout]);

  const handleLogout = () => {
    onLogout(); // Log the user out manually
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {userData && userData.role === 'student' ? (
        <div>
          <p>Welcome, {userData.username}!</p>
          {/* Display other user-related information for students */}
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <p>You do not have access to the dashboard.</p>
      )}
    </div>
  );
};

export default Dashboard;
