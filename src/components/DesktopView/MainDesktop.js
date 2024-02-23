/* This component is for the footer of all pages */
import React from 'react';
import NavBar from '../NavBar'
import HomeBody from '../HomeBody';
import Profile from '../Profile';
import Education from '../Education';
import Family from '../Family';
import Footer from '../Footer';
import './MainDesktop.css';
import CareersSlide from '../CareersSlide';
import Entrepreneurship from '../Entrepreneurship';
import CareersMain from '../CareersMain';
import Accountancy from '../Accountancy';

  
const MainDesktop = () => {
  return (

  <div className='LandingPage'>
    <div className='NavBar' id='NavBar'>
      <NavBar/>
    </div>

    <div className='Body' id='Body'>
     <section className='HomeBody'>
     <HomeBody />
     </section>
     <section className='Profile' id='Profile'>
     <Profile />
     </section>
    <section className='Education' id='Education'>
      <Education />
    </section>
    <section className='Career' id='Careers'>
      <CareersSlide />
    </section>
    <section className='Family' id='Family'>
      <Family />
    </section>
    </div>
    <div className='Footer' id='Footer'>
      <Footer />
    </div>

      
  </div>
    
  );
}

export default MainDesktop;