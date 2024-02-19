// App.js
import React from 'react';
import NavBar from './components/NavBar';
import AccountancySlide from './components/AccountancySlide';

const App = () => {
  return (
    <div className='LandingPage'>
        <div className='NavBar'>
          <NavBar />
        </div>
        
        <div className='Body'>
          <AccountancySlide />
        </div>

           </div>
  );
}
export default App;
