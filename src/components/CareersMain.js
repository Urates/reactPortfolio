// App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CareersSlide from './CareersSlide';
import Accountancy from './Accountancy';
import Entrepreneurship from './Entrepreneurship';
import SoftwareDev from './SoftwareDev';
import './CareersMain.css';

const CareersMain = () => {
  return (
    <div className='careers-container'>
        <div>
            <hr></hr>
                <CareersSlide />
        </div>
       
    </div>
  );
}
export default CareersMain;