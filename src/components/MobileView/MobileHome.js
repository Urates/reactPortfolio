import React from 'react';
import MobileLogo from "../../images/pb002.png";
import Menu from "../../images/menu.png";
import ImageIcon from "../../images/image-svg.png";
import VideoIcon from "../../images/videos.png";
import Reports from "../../images/reports.png";
import SearchIcon from "../../images/searchB.png";
import MobileHomeImg from "../../images/3.jpg";
import Facebok from '../../images/5.png';
import Linkedin from '../../images/8.png';
import Instagram from '../../images/9.png';
import X from '../../images/10.png';
import Gmail from '../../images/gmail.png';
import Location from '../../images/Location.png';
import Chat from '../../images/ChatBot.png';
import NavLinks from './NavLinks';
import './MobileHome.css';


const MobileHome = () => {
  return (
    <div className='Mobile-container'>

        <ul className='TopNavContent'>
          <li id='Left-Logo'><a href=''><img src={MobileLogo} alt='Logo'/></a></li>
          <li id='CenterName'><h2>UVIWE MAKIVA</h2></li>
          <li id='Right-Menu'><a href={NavLinks}><img src={Menu} alt='Menu icon'/></a></li>
        </ul>
        <ul className='SecondNav'>
            <h2>BLOG</h2>
            <ul className='Posts-media'>
                <li><a href=''><img src={ImageIcon} alt='Image Icon'/></a></li>
                <li><a href=''><img src={VideoIcon} alt='Video Icon'/></a></li>
                <li><a href=''></a><img src={Reports} alt='Report Icon'/></li>
                <li><a href=''><img src={SearchIcon} alt='Search Icon'/></a></li>
            </ul>
        </ul>
        <div className='MobileHome'>
            <img src={MobileHomeImg} alt='Mobile landing page image'></img>
            <p><strong>Background Information</strong><br /><br />Every now and then I revisit Bentham's philosophy of happiness and in doing so I help myself remember the importance of having two scales through which I can maximise my internal happiness; <br /><br /><b>1.</b> scale of pleasure, where the focus is primarily to maximise pleasure; <br /><b>2.</b> scale of pain, where the focus is to feel the least of this personal feeling. <br /><br />'Happiness is a matter of experiencing pleasure and lack of pain', says Bentham Jeremy. This is my roadmap to happiness. You should be asking yourself why do I neccesarily have to tell you this?.<br /><br />The answer is simple, I have to be brutally honest about my non-negotiables so that you immediately know how to treat or work in any way with me.</p>
        </div>
        <ul className='MobileFooter'>
            <li><a><img src={Facebok} alt='Facebook' /></a></li>
            <li><a><img src={Linkedin} alt='Linkedin' /></a></li>
            <li><a><img src={Instagram} alt='Instagram' /></a></li>
            <li><a><img src={X} alt='X' /></a></li>
            <li><a><img src={Gmail} alt='Gmail' /></a></li>
        </ul>
        
    </div>
  );
}
export default MobileHome;
