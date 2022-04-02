import React from 'react';
import { Link } from 'react-router-dom';
import UserContextProvider from '../../context/userContext';

const Dashboard = () => {
 
  return (
    <UserContextProvider>
      <div>Dashboard</div>
      <Link to={"/logout"}>Logout ?</Link>

    </UserContextProvider>
  )
}

export default Dashboard
