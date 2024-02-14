import React from "react";
import logo from '../images/pb002.png';
import './UpperNav.css';

const UpperNav = () => {
    return (

          <div className="NavGrid">
                <div className='logo'>
                    <img src={logo} alt='Personal Brand Logo' style={{width:'60px', height:'60px'}} />
                </div>

                <div className='navLinks'>
                  <ul>
                      <li id='Profile'><a href="#profile"><strong>Profile</strong></a></li>
                      <li id='Education'><a href="#education"><strong>Education</strong></a></li>
                      <li id='Careers'><a href="#careers"><strong>Careers</strong></a></li>
                      <li id='Family'><a href="#family"><strong>Family</strong></a></li>
                  </ul>
                </div>
        </div>    
    );
}
  
export default UpperNav;