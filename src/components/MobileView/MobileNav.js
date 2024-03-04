import React from "react";
import './MobileNav.css';
import MobileLogo from "../../images/pb002.png";
import Menu from "../../images/menu.png";




import ImageIcon from "../../images/image-svg.png";
import VideoIcon from "../../images/videos.png";
import Reports from "../../images/reports.png";
import SearchIcon from "../../images/searchB.png";

const MobileNav = () => {
   return (
    <div className="Nav-container">
      <div className="UpperNav">
        <a href=""><img src={MobileLogo} alt="Personal Logo" id="LeftLogo"/></a>
        <h1 id="MyName">UVIWE MAKIVA</h1>
        <a href=""><img src={Menu} alt="Menu Icon" id="RightMenu"/></a>  
      </div>
      <div className="BlogNav">
        <a id="BlogBtn">Blog</a>
        <ul>
          <li><a href=""><img src={ImageIcon} alt="Image Icon"/></a></li>
          <li><a href=""><img src={VideoIcon} alt="Image Icon"/></a></li>
          <li><a href=""><img src={Reports} alt="Image Icon"/></a></li>
          <li><a href=""><img src={SearchIcon} alt="Image Icon"/></a></li>
        </ul>
      </div>
    </div>
    );
}

export default MobileNav;
