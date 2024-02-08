import React from 'react';
import './FirstNav.css';
import Logo from '../images/pb002.png';

const FirstNav = () => {
  return (
    <nav>
            <img src={Logo} alt='Personal Brand Logo' />
            <ul>
                <li id='Profile'><a href="#profile"><strong>Profile</strong></a></li>
                <li id='Education'><a href="#education"><strong>Education</strong></a></li>
                <li id='Careers'><a href="#careers"><strong>Careers</strong></a></li>
                <li id='Family'><a href="#family"><strong>Family</strong></a></li>
            </ul>
    </nav>
  );
}

export default FirstNav;