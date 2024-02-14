import React from "react";
import UpperNav from './UpperNav';
import LowerNav from "./LowerNav";
import './NavBar.css';


const NavBar = () => {
    return (

    <div className="navStyle">
        <div className="nav1">
          <UpperNav />
        </div>
        
        <div className="nav2">
          <LowerNav />
        </div>
    </div>
      
    );
}
  
  export default NavBar;