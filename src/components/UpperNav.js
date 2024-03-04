import React from "react";
import logo from '../images/pb002.png';
import { useState, useEffect } from 'react';
import './UpperNav.css';

const UpperNav = () => {    
    const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      // Logic to determine which section is currently visible
      // For simplicity, let's assume you have an array of section IDs
      const sections = ['profile', 'education', 'careers', 'family'];
      let activeSection = '';

      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
          activeSection = sectionId;
        }
      });

      // Update the active link based on the active section
      setActiveLink(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array ensures the effect runs only once

    return (

          <div className="NavGrid">
                <div className='logo'>
                    <img src={logo} alt='Personal Brand Logo' style={{width:'60px', height:'60px'}} />
                </div>

                <div className='navLinks'>
                  <ul>
                      <li><a  href="#profile" className={activeLink === 'profile' ? 'active' : ''}><strong>Profile</strong></a></li>
                      <li><a href="#education" className={activeLink === 'education' ? 'active' : ''}><strong>Education</strong></a></li>
                      <li><a href="#careers" className={activeLink === 'careers' ? 'active' : ''}><strong>Careers</strong></a></li>
                      <li><a href="#family" className={activeLink === 'family' ? 'active' : ''}><strong>Family</strong></a></li>
                  </ul>
                </div>
        </div>    
    );
}
  
export default UpperNav; 