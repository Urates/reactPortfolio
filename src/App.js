// App.js
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';
 import HomeBody from './components/HomeBody';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='LandingPage'>
        <div className='NavBar'>
          <NavBar />
        </div>
        
        <div className='Body'>
          <HomeBody />
        </div>

        <div className='Footer'>
          <Footer />
        </div>
    </div>
  );
}
export default App;
