/* This component is for the footer of all pages */
import React from 'react';
import './Footer.css';
import Facebook from '../images/5.png';
import LinkedIn from '../images/8.png';
import Instagram from '../images/9.png';
import X from '../images/10.png';
import Gmail from '../images/gmail.png';


const Footer = () => {
    return (
      <div className='socials'>
         <ul>
            <li ><img src={Facebook} alt='facebook image' /></li>
            <li ><img src={LinkedIn} alt='Linkedin' /></li>
            <li ><img src={Instagram} alt='Instagram' /></li>
            <li ><img src={X} alt='X' /></li>
            <li ><img src={Gmail} alt='Gmail' /></li>
            <li className='socials-caption'>GET IN TOUCH</li>
         </ul>
      </div>
    );
  }
  
  export default Footer;