import React from 'react';
import logo from '../images/pb002.png';
import VidIcon from '../images/videos.png';
import ImgIcon from '../images/image-svg.png';
import Reports from '../images/reports.png';
import SearchIcon from '../images/searchB.png';
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
              
          </div>

          <div className='item5'>

          </div>

          <div className='item6'>

          </div>

          <div className='item7'>

          </div>

          <div className='item8'>

          </div>

      </div>
    );
  }
  
  export default Homepage;