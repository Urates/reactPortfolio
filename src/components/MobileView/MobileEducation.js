import React from "react";
import './MobileEducation.css';
import WSU from "../../images/wsu.jpg";
import Wits from "../../images/wits.jpg";
import ShortCourses from "../../images/shortcourses.jpg";
import SoftwareDev from "../../images/fullstack.jpg";


const MobileEducation = () => {
   return (
    <div className="MobileEducation-container" id="MobileEducation">
        <span><h3>Education</h3><hr></hr></span>
        <ul>
            <li><img  src={WSU} alt="WSU Logo"/></li>
            <li><img  src={Wits} alt="Wits Logo"/></li>
        </ul>
        <p>My academic journey has been quite long because while I am learning I had always been questioning new methods of learning both for me and for the upcoming generation. This information herein is therefore not exhaustive of my academic achievements, it just a record of my formal education.</p>

        <p>As soon as my secondary schooling ended, I started a journey in BCom Accounting Science which I later converted to my SAICA unaccredited BCom Accounting degree in 2018 mid-year. I had to complete my fourth year even though I cancelled my fourth year modules in around Jul 2018 and continued with Financial Management which I was repeating from 3rd Year. In 2019, I then enrolled to BSc Computer Science with Wits University which I only studied almost a year before I could drop out due to non-academic related issues.</p>
        <ul>
            <li><img  src={ShortCourses} alt="Short Courses Logo"/></li>
            <li><img  src={SoftwareDev} alt="Software Dev Logo"/></li>
        </ul>
        <p>After spending a lot of time (around 18 months) serving in one of the Accounting firms based in Mthatha, Kunokhar CTP, I moved to Cape Town where I got an intership program in full stack Software Development with ABSA partnered with CapaCiti and Younglings.</p>
        
    </div>
    );
}

export default MobileEducation;