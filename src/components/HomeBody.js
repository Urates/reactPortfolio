import React from "react";
import HomeImg from '../images/3-copy.jpg';
import './HomeBody.css';


const HomeBody = () => {
    return (

    <div className="HomeBody-container ">
            <div className='HomePicture'>
              < img src={HomeImg} alt='Uviwe Makiva'/>
            </div>

          <div className='HomeText'>
              <p><strong>Background Information</strong></p>
              <p className='FirstText'>Every now and then I revisit Bentham's philosophy of happiness and in doing so I help myself remember the importance of having two scales through which I can maximise my internal happiness; (i) scale of pleasure, where the focus is primarily to maximise pleasure; (ii) scale of pain, where the focus is to feel the least of this personal feeling. 'Happiness is a matter of experiencing pleasure and lack of pain', says Bentham Jeremy. This is my roadmap to happiness.</p>

              <p className='SecondText'>You should be asking yourself why do I neccesarily have to tell you this? The answer is simple, I have to be brutally honest about my non-negotiables so that you immediately know how to treat or work in any way with me.</p>

              <p className='ThirdText'>My non-negotiables are pretty simple: (i)Peace, (ii) Happiness, (iii)Life Purpose. It gets even simpler because in this page I also define what these terms mean to me. The importance for the public to know this is so that I am able to network with everyone seamlessly, having laid down my belief system in a way that helps just about everyone to contextualise before judging my behaviour.</p>
          </div>
    </div>
    );
}

  export default HomeBody;