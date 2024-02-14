import React from "react";
import VidIcon from '../images/videos.png';
import ImgIcon from '../images/image-svg.png';
import Reports from '../images/reports.png';
import SearchIcon from '../images/searchB.png';
import './LowerNav.css';


const LowerNav = () => {
    return (
        <div className="lowerNav">
                  <div><button>Blog</button></div>
                  <ul>
                  <li><span><img src={VidIcon} /><p>Video Posts</p></span></li>
                      <li><span><img src={ImgIcon} /><p>Image Posts</p></span></li>
                      <li><span><img src={Reports} /><p>Reports</p></span></li>
                      <li className="SearchInput"><span><img src={SearchIcon} /><input placeholder='search content in my Blog' id="BlogSearch"></input></span></li>
                </ul>
        </div>
      
    );
}
export default LowerNav;