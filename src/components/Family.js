import React from 'react';
import CoolVideo from "../videos/video1.mp4";
import './Family.css';

const Family = () => {
    return (
        <div className="family-container">
           <div className='row'>
                <h2>Family Testimonials</h2>
                <hr></hr>
           </div>
           <div className='row'>
                <ul>
                    <li>
                        <video controls>
                        <source src={CoolVideo} type="video/mp4" />
                        </video>
                    </li>
                    <li>
                        <video controls>
                        <source src={CoolVideo} type="video/mp4" />
                        </video>
                    </li>        

                    <li>
                        <video controls>
                        <source src={CoolVideo} type="video/mp4" />
                        </video>
                    </li> 
        
                </ul>
           </div>
           <div className='row'>
                <ul>
                <li>        
                        <video controls>
                        <source src={CoolVideo} type="video/mp4" />
                        </video>
                    </li>

                    <li>
                        <video controls>
                        <source src={CoolVideo} type="video/mp4" />
                        </video>
                    </li>       

                    <li>
                        <video controls>
                        <source src={CoolVideo} type="video/mp4" />
                        </video>
                    </li>  
                </ul>
           </div>


        </div>    
    );
}
  
export default Family;