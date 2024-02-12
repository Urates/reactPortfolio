import React from 'react';
import logo from '../images/pb002.png';
import VidIcon from '../images/videos.png';
import ImgIcon from '../images/image-svg.png';
import Reports from '../images/reports.png';
import SearchIcon from '../images/searchB.png';
import HomeImg from '../images/3.jpg';
import Facebok from '../images/5.png';
import Linkedin from '../images/8.png';
import Instagram from '../images/9.png';
import X from '../images/10.png';
import Gmail from '../images/gmail.png';
import Location from '../images/Location.png';
import Chat from '../images/ChatBot.png';
import './Homepage.css';

const Homepage = () => {
    return (
      <div className='project-template '>
        
          <div className='item1'>
              <img src={logo} alt='Personal Brand Logo' style={{width:'60px', height:'60px'}} />
          </div>

          <div className='item2'>
              <ul>
                    <li id='Profile'><a href="#profile"><strong>Profile</strong></a></li>
                    <li id='Education'><a href="#education"><strong>Education</strong></a></li>
                    <li id='Careers'><a href="#careers"><strong>Careers</strong></a></li>
                    <li id='Family'><a href="#family"><strong>Family</strong></a></li>
              </ul>
          </div>

          <div className='item3'>
              
                <div><button>Blog</button></div>
                <ul>
                <li><span><img src={VidIcon} /><p>Video Posts</p></span></li>
                    <li><span><img src={ImgIcon} /><p>Image Posts</p></span></li>
                    <li><span><img src={Reports} /><p>Reports</p></span></li>
                    <li className="SearchInput"><span><img src={SearchIcon} /><input placeholder='search content in my Blog' id="BlogSearch"></input></span></li>
              </ul>
          </div>

          <div className='item4'>
              <img src={HomeImg} alt='Uviwe Makiva'/>
          </div>

          <div className='item5'>
              <p><strong>Background Information</strong></p>
              <p>Every now and then I revisit Bentham's philosophy of happiness and in doing so I help myself remember the importance of having two scales through which I can maximise my internal happiness; (i) scale of pleasure, where the focus is primarily to maximise pleasure; (ii) scale of pain, where the focus is to feel the least of this personal feeling. 'Happiness is a matter of experiencing pleasure and lack of pain', says Bentham Jeremy. This is my roadmap to happiness.</p>
              <p>You should be asking yourself why do I neccesarily have to tell you this? The answer is simple, I have to be brutally honest about my non-negotiables so that you immediately know how to treat or work in any way with me.</p>
              <p>My non-negotiables are pretty simple: (i)Peace, (ii) Happiness, (iii)Life Purpose. It gets even simpler because in this page I also define what these terms mean to me. The importance for the public to know this is so that I am able to network with everyone seamlessly, having laid down my belief system in a way that helps just about everyone to contextualise before judging my behaviour.</p>
          </div>

          <div className='item6'>
                <div className='socials'>
                    <ul>
                        <li><img src={Facebok} alt='Facebook' /></li>
                        <li><img src={Linkedin} alt='Linkedin' /></li>
                        <li><img src={Instagram} alt='Instagram' /></li>
                        <li><img src={X} alt='X' /></li>
                        <li><img src={Gmail} alt='Gmail' /></li>
                    </ul>
                    <span><p><strong>GET IN TOUCH</strong></p></span>
                </div>
          </div>

          <div className='item7'>
              <a href='https://www.google.com/maps/place/Bizana,+4800/@-30.8566379,29.8408711,15z/data=!4m6!3m5!1s0x1e5f5ee8f49450a9:0x72ad018693910a50!8m2!3d-30.8581891!4d29.8534132!16s%2Fm%2F0glrw35?entry=ttu'><img src={Location} alt='Location' /></a>
          </div>

          <div className='item8'>
              <img src={Chat} />
          </div>

      </div>
    );
  }
  
  export default Homepage;