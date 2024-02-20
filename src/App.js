// App.js
import React from 'react';
import NavBar from './components/NavBar';
import CareersSlide from './components/CareersSlide';
const App = () => {
  return (
    <div className='LandingPage'>
        <div className='NavBar'>
          <NavBar />
        </div>
        
        <div className='Body'>
          <CareersSlide />
        </div>

           </div>
  );
}
export default App;
