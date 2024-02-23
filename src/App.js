// App.js
import React from 'react';
import MainDesktop from './components/DesktopView/MainDesktop';
import MainMobile from './components/MobileView/MainMobile';
import { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    return (
    <div>
        {windowWidth <= 650 ? (
        <MainMobile />
      ) : (
        <MainDesktop />
      )}
    </div>
  );
}
export default App;
