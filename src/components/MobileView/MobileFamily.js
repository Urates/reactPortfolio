import React from 'react';
import'./MobileFamily.css';
import MobileTestimonials from '../../videos/video1.mp4';

const MobileFamily = () => {
    return (
    <div className='MobileFamily-Container' id='MobileFamily'>
        <span><h3>Family Testimonials</h3><hr></hr></span>
        <ul>
            <li> 
                <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video>
            </li>
            <li>
            <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video>
            </li>
            <li>
            <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video>
            </li>
        </ul>
        <ul>
            <li>
                <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video></li>
            <li>
                <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video></li>
            <li>
            <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video>
            </li>
        </ul>
        <ul>
            <li>
                <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video></li>
            <li>
            <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video>
            </li>
            <li>
            <video controls>
                    <source src={MobileTestimonials} type="video/mp4" />
                </video>
            </li>
        </ul>
    </div>
  );
}
export default MobileFamily;
