import React from 'react';
import './Careers.css';
import AccountancySlide from '../../images/AccountancySlide.gif';


const Careers = () => {
    return (
    <div className='MobileCareers-container'>
      <p>It is notably correct to assume that my current skillset matches at least 3 careers which I have named and described in this page. My journey with entrepreneurship started just few years after my birth which was followed by a career in Accountancy after my matric then I topped all of that with strong skills in Technology, full stack software development to be more precise. </p>
      
      <img src={AccountancySlide} alt='Accountancy Slideshow'/>
    </div>
  );
}
export default Careers;
