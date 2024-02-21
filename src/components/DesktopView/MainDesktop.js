/* This component is for the footer of all pages */
import React from 'react';
import NavBar from '../NavBar'
import HomeBody from '../HomeBody';
import Profile from '../Profile';
import Education from '../Education';
import Family from '../Family';
import './MainDesktop.css';

  
const MainDesktop = () => {
  return (

  <div>
      <NavBar />
      <HomeBody />
      <Profile />
      <Education />
      <Family />
  </div>
    
  );
}

export default MainDesktop;