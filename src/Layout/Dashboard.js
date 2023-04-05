import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../WebPages/Shared/Footer/Footer';
import Header from '../WebPages/Shared/Header/Header';

const Dashboard = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;