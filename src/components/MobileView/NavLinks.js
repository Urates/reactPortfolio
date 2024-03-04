import React from 'react';
import { useState } from "react";
import './NavLinks.css';


const NavLinks = () => {

  const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
    setIsOpen(!isOpen);
    };

    const closeMenu = () => {
      setIsOpen(false);
    };
  return (
        <div className='NavLinks-container'>
          <div id='RightMenu' onClick={toggleMenu}>
          </div>
          <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
            <li>
              <a href="#MobileProfile" onClick={closeMenu}>Profile</a>
            </li>
            <li>
              <a href="#MobileEducation" onClick={closeMenu}>Education</a>
            </li>
            <li>
              <a href="#MobileCareers" onClick={closeMenu}>Careers</a>
            </li>
            <li>
              <a href="#MobileFamily" onClick={closeMenu}>Family</a>
            </li>
        </ul>
      </div>
     );
}
export default NavLinks;