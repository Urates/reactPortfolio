// App.js
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Education.css';
import WSU from '../images/wsu.jpg';
import Wits from '../images/wits.jpg';
import ShortCourses from '../images/shortcourses.jpg';
import Fullstack from '../images/fullstack.jpg';


const Education = () => {
  return (

    <div className='main-education'>
        <div className='EducationContainer'>
            <div className='EducationSub-container'>
                <img src={WSU} alt='WSU Logo' />
            </div>

            <div className='EducationSub-container'>
                <img src={Wits} alt='Wits Logo' />
            </div>

            <div className='EducationSub-container'>
                <img src={Fullstack} alt='Wits Logo' />
            </div>


            <div className='EducationSub-container'>
                <img src={ShortCourses} alt='Wits Logo' />
            </div>
        
            <div className='Education-infoBox' id='Education-infoBox'>
                <p>My academic journey has been quite long because while I am learning I had always been questioning new methods of learning both for me and for the upcoming generation. This information herein is therefore not exhaustive of my academic achievements, it just a record of my formal education.</p>
                <p>As soon as my secondary schooling ended, I started a journey in BCom Accounting Science which I later converted to my SAICA unaccredited BCom Accounting degree in 2018 mid-year. I had to complete my fourth year even though I cancelled my fourth year modules in around Jul 2018 and continued with Financial Management which I was repeating from 3rd Year. In 2019, I then enrolled to BSc Computer Science with Wits University which I only studied almost a year before I could drop out due to non-academic related issues. After spending a lot of time <strong>around 18 months</strong> serving in one of the Accounting firms based in Mthatha, Kunokhar CTP, I moved to Cape Town where I got an intership program in full stack Software Development with ABSA partnered with CapaCiti and Younglings.</p>
                <span className='education-more' id='education-more'><h3>read more</h3></span>

                <div className='default-invissible'>
                    <p className='greyText'>academic related issues. After spending a lot of time (around 18 months) serving in one of the Accounting firms based in Mthatha, Kunokhar CTP, I moved to Cape Town where I got an intership program in full stack Software Development with ABSA partnered with CapaCiti and Younglings.</p>
                    <p>While getting to Cape Town in 2023 March, the internship with ABSA was not secured yet and I was already busy with online programs with Alx (Software Engineering), and Alx Ventures (Founder Academy and Incubation). I also downloaded Apps to learn JavaScript, and other computer programming languages but had not started with as much until I joined CapaCiti through the ABSA internship program. This is the time when I self studied R programming, Django, Python, Java, JavaScript, Node.js all at a very fundamental level. CapaCiti then equiped me with more skills with Java, Python, JavaScript, HTML, CSS, Node.JS, and React.JS before I could join Younglings in Jan 2024. </p>
                </div>
      </div>
    </div>
    <div>

    </div>
    </div>
  );
}
export default Education;