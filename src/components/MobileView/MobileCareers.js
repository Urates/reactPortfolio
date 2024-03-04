// App.js
import React from 'react';
import AccountancySlide from '../../images/AccountancySlide.gif';
import EntrepSlide from '../../images/EntrepSlide.gif';
import SoftwareDevSlide from '../../images/SoftwareDevSlide.gif';
import './MobileCareers.css';

const MobileCareers = () => {
    return (
    <div className='MobileCareers-container' id='MobileCareers'>
        <span><h3>Careers</h3><hr></hr></span>
        <p>It is notably correct to assume that my current skillset matches at least 3 careers which I have named and described in this page. My journey with entrepreneurship started just few years after my birth which was followed by a career in Accountancy after my matric then I topped all of that with strong skills in Technology, full stack software development to be more precise. </p>

        <div>
            <a href=''><img src={AccountancySlide} alt='Accountancy slide' className='AccountancyHover'/></a>
            <p>Accountancy</p>
        </div>

        
        <div> 
            <a href=''><img src={EntrepSlide} alt='Entrepreneurship slide' className='EntrepreneurshipHover'/></a>
            <p>Entrepreneurship</p>
        </div>

        <div>
            <a href=''><img src={SoftwareDevSlide} alt='Software development slide' className='Software Dev Hover'/></a>
            <p>Software development</p>
        </div>
    </div>
  );
}
export default MobileCareers;

