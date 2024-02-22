import React from "react";
import VidIcon from '../images/videos.png';
import ImgIcon from '../images/image-svg.png';
import Reports from '../images/reports.png';
import SearchIcon from '../images/searchB.png';
import './LowerNav.css';


const LowerNav = () => {
    return (
        <div className="lowerNav">
                  <div><a href=""><h2>Blog</h2></a></div>
                  <ul>
                  <li><span><img src={VidIcon} alt="Video Icon"/><p>Video Posts</p></span></li>
                      <li><span><img src={ImgIcon} alt="Image Icon"/><p>Image Posts</p></span></li>
                      <li><span><img src={Reports} alt="Reports Icon"/><p>Reports</p></span></li>
                      <li className="SearchInput"><span><img src={SearchIcon} /><input placeholder='search content in my Blog' id="BlogSearch"></input></span></li>
                </ul>
        </div>
      
    );
}
export default LowerNav;