// App.js
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
 import Careers from './components/Careers';

const App = () => {
  return (
    <div className='LandingPage'>
        <div className='NavBar'>
          <NavBar />
        </div>
        
        <div className='Body'>
          <Careers />
        </div>

           </div>
  );
}
export default App;
