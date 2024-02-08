import React from 'react';
import './FirstNav.css';



const FirstNav = () => {
  return (
    <nav>
            <image src='../assets/pb002.png'></image>
            <ul>
                <li id='Profile'><a href="#profile"><strong>Profile</strong></a></li>
                <li id='Education'><a href="#education"><strong>Education</strong></a></li>
                <li id='Careers'><a href="#careers"><strong>Careers</strong></a></li>
                <li id='Family'><a href="#family"><strong>Family</strong></a></li>
            </ul>
    </nav>
  );
}

export default FirstNav;