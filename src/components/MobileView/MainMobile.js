// App.js
import React from 'react';
import './MainMobile.css';
import MobileNav from './MobileNav';
import MobileFooter from './MobileFooter';
import MobileProfile from './MobileProfile';
import MobileEducation from './MobileEducation';

const MainMobile = () => {
    return (
    <div className='Mobile-Container'>
      <div className='Mobile-nav'>
        <MobileNav />
      </div>
      <div>
        <MobileProfile />
      </div>

      <div>
        <MobileEducation />
      </div>
      <div>
      <MobileFooter />
      </div>
    </div>
  );
}
export default MainMobile;
