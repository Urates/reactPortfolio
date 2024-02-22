import React from 'react';
import MobileHomeImg from "../../images/3.jpg";
import Facebok from '../../images/5.png';
import Linkedin from '../../images/8.png';
import Instagram from '../../images/9.png';
import X from '../../images/10.png';
import Gmail from '../../images/gmail.png';
import './MobileHome.css';


const MobileHome = () => {
  return (
    <div className='Mobile-container'>
        <div className='MobileHome'>
          <figure>
            <img src={MobileHomeImg} alt='Mobile landing page image'></img>
            <figcaption>
              <p className='MobileText1'><strong>Background Information</strong></p>
              <p className='MobileText2'>Every now and then I revisit Bentham's philosophy of happiness and in doing so I help myself remember the importance of having two scales through which I can maximise my internal happiness;</p>
              
              <p className='MobileText3'><b>1.</b> scale of pleasure, where the focus is primarily to maximise pleasure;<b>2.</b> scale of pain, where the focus is to feel the least of this personal feeling.'Happiness is a matter of experiencing pleasure and lack of pain', says Bentham Jeremy.</p> 
              
              <p className='MobileText4'>This is my roadmap to happiness. You should be asking yourself why do I neccesarily have to tell you this?.The answer is simple, I have to be brutally honest about my non-negotiables so that you immediately know how to treat or work in any way with me.</p>
            </figcaption>
          </figure>
        </div>
        <ul className='MobileFooter'>
            <li><a><img src={Facebok} alt='Facebook' /></a></li>
            <li><a><img src={Linkedin} alt='Linkedin' /></a></li>
            <li><a><img src={Instagram} alt='Instagram' /></a></li>
            <li><a><img src={X} alt='X' /></a></li>
            <li><a><img src={Gmail} alt='Gmail' /></a></li>
        </ul>
        
    </div>
  );
}
export default MobileHome;
