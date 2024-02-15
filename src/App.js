// App.js
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
 import Profile from './components/Profile';

const App = () => {
  return (
    <div className='LandingPage'>
        <div className='NavBar'>
          <NavBar />
        </div>
        
        <div className='Body'>
          <Profile />
        </div>

           </div>
  );
}
export default App;
