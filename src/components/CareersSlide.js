import React, {useState} from "react";
import Entrepreneurship from "./Entrepreneurship";
import Accountancy from './Accountancy';
import SoftwareDev from './SoftwareDev';
import './Careers.css';


const CareersSlide = () => {
  const [activeComponent, setActiveComponent] = useState('Accountancy');
  const [showButtons, setShowButtons] = useState(true);


  const toggleComponent = (componentName) => {
    setActiveComponent(componentName);
    setShowButtons(false);
  };
  return (
    
    <div className="main-container">
            {activeComponent === 'Accountancy' && <Accountancy />}
            {activeComponent === 'Entrepreneurship' && <Entrepreneurship />}
            {activeComponent === 'SoftwareDev' && <SoftwareDev />}

          <a href="" onClick={() => toggleComponent('Accountancy')}>
          <div className="accountancyStyle">
            <p><strong>ACCOUNTANCY</strong></p>
          </div>
          </a>

          <a href="" onClick={() => toggleComponent('Entrepreneurship')}>
          <div className="EntrepStyle" >
            <p><strong>ENTREPRENEURSHIP</strong></p>
          </div>
          </a>
          
          <a href="" onClick={() => toggleComponent('SoftwareDev')}>
          <div className="SoftwareDevStyle">
            <p><strong>SOFTWARE DEVELOPMENT</strong></p>
          </div>
          </a>
    </div>
      
    );
}
 
  export default CareersSlide;