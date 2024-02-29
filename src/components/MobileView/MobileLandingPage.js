import React from 'react';
import './MobileLandingPage.css';
import MobileHomeImage from '../../images/3-copy.jpg';

const MobileLandingPage = () => {
    return(
    <div className='mLandingPage-container'>
        <img src={MobileHomeImage} alt='Mobile Home Image'/>
        <div  className='mLandingPage-text'>
        <h3><b>Background Information</b></h3>
            <p>Every now and then I revisit Bentham's philosophy of happiness and in doing so I help myself remember the importance of having two scales through which I can maximise my internal happiness; (i) scale of pleasure, where the focus is primarily to maximise pleasure; (ii) scale of pain, where the focus is to feel the least of this personal feeling.</p> 
            
            <p>'Happiness is a matter of experiencing pleasure and lack of pain', says Bentham Jeremy. This is my roadmap to happiness. You should be asking yourself why do I neccesarily have to tell you this? The answer is simple, I have to be brutally honest about my non-negotiables so that you immediately know how to treat or work in any way with me.</p>
        </div>
       
    </div>
  );
}
export default MobileLandingPage;