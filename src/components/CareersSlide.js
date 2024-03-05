import React, {useState} from "react";
import Entrepreneurship from "./Entrepreneurship";
import Accountancy from './Accountancy';
import SoftwareDev from './SoftwareDev';
import './Careers.css';


const CareersSlide = () => {
  return (
    <div id="careers">
      <span><h1>Careers</h1><hr></hr></span>
      <p className="Careers-paragraph">It is notably correct to assume that my current skillset matches at least 3 careers which I have named and described in this page. My journey with entrepreneurship started just few years after my birth which was followed by a career in Accountancy after my matric then I topped all of that with strong skills in Technology, full stack software development to be more precise. </p>
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