import React from 'react';
import './MobileProfile.css';
import Prosperity from "../../images/prosperity.png";
import Professionalism from "../../images/professionalism.png";
import Integrity from "../../images/integrity.png";
import Knowledge from "../../images/knowledge.png";

const MobileProfile = () => {
    return (
    <div className='Profile-Container'>
      <span><h1>Professional Profile</h1><hr></hr></span>
      <p>As we grow it becomes hard to pinpoint or to understand our professional values until we encounter a professional environment and I am not immune to this challenge in self-discovery. I think these professional values grow with us as we thrive our way in life with the external environment that hugely shape who we are. A perfect example of this is when I noticed just how I am amazed by the whole idea of prosperity in living things. From plants, animals to other living things everything has a strong desire to witness the future either through offsprings or through any other possible way. This gave me strong instincts in making me want to be part of that global agenda for living things, i.e. outsurviving the stumbling blocks in our evolution through prosperity or fruition of progress.</p>

        <p id='ProfileText1'>Not so long ago, I became part of an emerging non profit company whose main objective is to regulate the small business environment. In this company there are four main pillars or values that guide the operations of the company. These values echo a very good abstraction of my professional profile; it is them that make the working environment of this company, Small Business Practitioners of South Africa, conducive even for a professional like me. The following elaborates more on these values:</p>
        
        <span><img src={Prosperity} alt="Prosperity Icon" /><h3>PROSPERITY</h3></span>
        
        <p>"Anyone with the grit mindset that can last for a long time is simply regarded as prosperous for our purposes. This is because grit mindset guarantees the success we want to see in small business owners". This is how prosperity is defined in this company and that perfectly matches to what I mean when I say I value prosperity.</p>

        <img src={Professionalism} alt="Professionalism Icon" />
        <p>"For our purposes, professionalism shall mean the quality of being skillful or competent, responsible and punctual". This is how the company defines professionalism and I beg not to differ.</p>

        <img src={Integrity} alt="Integrity Icon" />
        <p>In addition to being the quality of being honest and moral, integrity shall include being transparent, accountable, and time cautious. In this form, integrity is an integral part of my foundational professional values.</p>

        <img src={Knowledge} alt="Knowledge Icon" />
        <p>In information systems studies knowledge shall mean an integrated and organised information acquired both from practical experience and non-practical studies. I want to say I have this viewpoint when I say knowledge is one of my fundamental professional qualities.</p>
    </div>
  );
}
export default MobileProfile;
