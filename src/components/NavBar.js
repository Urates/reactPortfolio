import React from 'react';
import './Navigation.css';


const NavBar = () => {
  return (
    <nav className='NavBar'>
      <ul>
        <li><a href="#Profile">Profile</a></li>
        <li><a href="#Education">Education</a></li>
        <li><a href="#Careers">Careers</a></li>
        <li><a href="#Family">Family</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;