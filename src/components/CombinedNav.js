import React from "react";
import FirstNav from './FirstNav';
import BlogNav from "./BlogNav";

const CombinedNav = () => {
    return (
      <div className='Grid-container'>
        <FirstNav />
        <BlogNav />
      </div>
    );
  }
  
  export default CombinedNav;