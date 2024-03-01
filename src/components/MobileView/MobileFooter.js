import React from 'react';
import Facebok from '../../images/5.png';
import Linkedin from '../../images/8.png';
import Instagram from '../../images/9.png';
import X from '../../images/10.png';
import Gmail from '../../images/gmail.png';
import Location from '../../images/Location Icon.png';
import Chat from '../../images/ChatBot.png';
import './MobileFooter.css';

  
const MobileFooter = () => {
  return (

  <div className="MobileFooterContainer">
    <ul>
      <li><a href='https://www.facebook.com/profile.php?id=100009275363960'><img src={Facebok} alt='Facebook Icon'/></a></li>  
      <li><a href='https://www.linkedin.com/in/uviwe-makiva-5aa888146/'><img src={Linkedin} alt='LinkedIn Icon'/></a></li>  
      <li><a href='https://www.instagram.com/uviwe.makiva/'><img src={Instagram} alt='Instagram Icon'/></a></li>
      <li><a href='https://twitter.com/Uviwe76044741'><img src={X} alt='X Icon'/></a></li>  
      <li><a href='umakiva@gmail.commailto:uviwemakiva@gmail.com?subject=Web%20Based%20Query&body=Write%20your%20email%20body%20here'><img src={Gmail} alt='Gmail Icon'/></a></li>  
    </ul>
    <ul>
      <li id='Copyright'>
        <p>Copyright Reserved&copy; Uviwe Makiva 2024 </p>
      </li>
    </ul>
  </div>
    
  );
}

export default MobileFooter;