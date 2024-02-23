import React, {useState} from "react";
import Entrepreneurship from "./Entrepreneurship";
import Accountancy from './Accountancy';
import SoftwareDev from './SoftwareDev';
import './Careers.css';


const CareersSlide = () => {
  return (
    <div>
      <span><h1>Careers</h1><hr></hr></span>
      <div className="main-container">
          <a href="">
          <div className="accountancyStyle">
            <p><strong>ACCOUNTANCY</strong></p>
          </div>
          </a>

          <a href="">
          <div className="EntrepStyle" >
            <p><strong>ENTREPRENEURSHIP</strong></p>
          </div>
          </a>
          
          <a href="">
          <div className="SoftwareDevStyle">
            <p><strong>SOFTWARE DEVELOPMENT</strong></p>
          </div>
          </a>
    </div>
    </div>
    
      
    );
}
 
  export default CareersSlide;