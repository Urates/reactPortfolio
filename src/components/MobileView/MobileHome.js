import React from 'react';
import MobileLogo from "../../images/pb002.png";
import Menu from "../../images/menu.png";
import './MobileHome.css';


const MobileHome = () => {
  return (
    <div className='Mobile-container'>
        <ul>
          <li className='leftLogo'><img src={MobileLogo} alt='Logo'/></li>
          <li className='rightMenu'><img src={Menu} alt='Menu icon'/></li>
        </ul>
    </div>
  );
}
export default MobileHome;
