import React from "react";
import logo from '../images/pb002.png';
import { NavLink } from 'react-router-dom';import Profile from './Profile';
import Education from './Education';
import Family from './Family'
import './UpperNav.css';

const UpperNav = () => {    
    return (

          <div className="NavGrid">
                <div className='logo'>
                    <img src={logo} alt='Personal Brand Logo' style={{width:'60px', height:'60px'}} />
                </div>

                <div className='navLinks'>
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active">{logo}</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/Profile" activeClassName="active">Profile</NavLink>
                        </li>

                        <li>
                            <NavLink exact to="/Education" activeClassName="active">Education</NavLink>
                        </li>

                        <li>
                            <NavLink exact to="/CareersMain" activeClassName="active">Careers</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/Family" activeClassName="active">Family</NavLink>
                        </li>

                    </ul>
                
                </div>
        </div>    
    );
}
  
export default UpperNav; 