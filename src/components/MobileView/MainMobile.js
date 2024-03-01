import React from 'react';
import MobileNav from './MobileNav';
import MobileFooter from './MobileFooter';
import MobileProfile from './MobileProfile';
import MobileEducation from './MobileEducation';
import MobileCareers from './MobileCareers';
import MobileLandingPage from './MobileLandingPage';
import MobileFamily from './MobileFamily';
import MobileBlog from './MobileBlog';

const MainMobile = () => {
    return (
    <div className='Mobile-Container'>
      <div className='Mobile-nav'>
        <MobileNav />
      </div>
      <div>
      <MobileLandingPage />
      </div>
      <div>
        <MobileProfile />
      </div>

      <div>
        <MobileEducation />
      </div>
      
      <div>
        <MobileCareers />
      </div>

      <div>
      <MobileFooter />
      </div>
      <div>
      <MobileFamily />
      </div>
      <div>
      <MobileBlog />
      </div>
    </div>
  );
}
export default MainMobile;
