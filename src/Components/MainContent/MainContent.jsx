import React from "react";
import Header from '../Header/Header'

import { Outlet } from "react-router-dom";
import './MainContent.css'
const MainContent = () => {
  return (
    <div className="main-content">
      <Header />
      <Outlet/>
    </div>
  );
};

export default MainContent;
