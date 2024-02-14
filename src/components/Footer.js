/* This component is for the footer of all pages */
import React from 'react';
import Facebok from '../images/5.png';
import Linkedin from '../images/8.png';
import Instagram from '../images/9.png';
import X from '../images/10.png';
import Gmail from '../images/gmail.png';
import Location from '../images/Location.png';
import Chat from '../images/ChatBot.png';
import './Footer.css';

  
const Footer = () => {
  return (

  <div className="FooterContainer">
                    <ul >
                        <li><img src={Facebok} alt='Facebook' /></li>
                        <li><img src={Linkedin} alt='Linkedin' /></li>
                        <li><img src={Instagram} alt='Instagram' /></li>
                        <li><img src={X} alt='X' /></li>
                        <li><img src={Gmail} alt='Gmail' /></li>
                        <span><p><strong>GET IN TOUCH</strong></p></span>
                    </ul>

                    <ul>
                      <li><a href='https://www.google.com/maps/place/Bizana,+4800/@-30.8566379,29.8408711,15z/data=!4m6!3m5!1s0x1e5f5ee8f49450a9:0x72ad018693910a50!8m2!3d-30.8581891!4d29.8534132!16s%2Fm%2F0glrw35?entry=ttu' target="_blank"><img src={Location} alt='Location' /></a></li>
                    </ul>
                    
                    <ul>
                      <img src={Chat} />
                  </ul>
  </div>
    
  );
}

export default Footer;