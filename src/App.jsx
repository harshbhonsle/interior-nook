import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './Components/Header';
import HeroHeading from './Components/HeroHeading';
import About from './Components/About';
import Service from './Components/Service';
import Recent from './Components/Recent';
import Contact from './Components/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // animate only once on scroll down
    });
  }, []);

  return (
    <>
      <Header />
      <HeroHeading />
      <About />
      <Service />
      <Recent />
      <Contact />
    </>
  );
};

export default App;
