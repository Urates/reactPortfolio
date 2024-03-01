/* This component is for the footer of all pages */
import React from 'react';
import Facebok from '../images/5.png';
import Linkedin from '../images/8.png';
import Instagram from '../images/9.png';
import X from '../images/10.png';
import Gmail from '../images/gmail.png';
import Location from '../images/Location Icon.png';
import Chat from '../images/ChatBot.png';
import './Footer.css';

  
const Footer = () => {
  return (

  <div className="FooterContainer">
          
                    <ul className='footerItems'>
                        <li><a href='https://www.facebook.com/profile.php?id=100009275363960'><img src={Facebok} alt='Facebook' /></a></li>
                        <li><a href='https://www.linkedin.com/in/uviwe-makiva-5aa888146/'><img src={Linkedin} alt='Linkedin' /></a></li>
                        <li><a href='https://www.instagram.com/uviwe.makiva/'><img src={Instagram} alt='Instagram' /></a></li>
                        <li><a href='https://twitter.com/Uviwe76044741'><img src={X} alt='X' /></a></li>
                        <li><a href='mailto:umakiva@gmail.com?subject=Web%20Based%20Query&body=Write%20your%20email%20body%20here'><img src={Gmail} alt='Gmail' /></a></li>
                        <li><a href='https://www.google.com/maps/place/Bizana,+4800/@-30.8566379,29.8408711,15z/data=!4m6!3m5!1s0x1e5f5ee8f49450a9:0x72ad018693910a50!8m2!3d-30.8581891!4d29.8534132!16s%2Fm%2F0glrw35?entry=ttu' target="_blank"><img src={Location} alt='Location' /></a></li>
                        <li><img src={Chat} /></li>
                    </ul>                   
  </div>
    
  );
}

export default Footer;