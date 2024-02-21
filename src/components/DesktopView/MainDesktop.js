/* This component is for the footer of all pages */
import React from 'react';
import NavBar from '../NavBar'
import HomeBody from '../HomeBody';
import Profile from '../Profile';
import Education from '../Education';
import Family from '../Family';
import Footer from '../Footer';
import './MainDesktop.css';

  
const MainDesktop = () => {
  return (

  <div className='LandingPage'>
    <div className='NavBar' id='NavBar'>
      <NavBar />
    </div>
    <div className='Body' id='Body'>
    <HomeBody />
    </div>
    <div className='Footer' id='Footer'>
    </div>

      
  </div>
    
  );
}

export default MainDesktop;