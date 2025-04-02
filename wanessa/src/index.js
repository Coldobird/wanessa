import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header.js';
import Hero from './Hero.js';
import './index.css';
import Treatments from './Treatments.js';
import TimeLine from './TimeLine.js';
import SocialProof from './SocialProof.js';
import About from './About.js';
import Footer from './Footer.js';

// const ScrollChecker = () => {
//   useEffect(() => {
//     const scrollables = [...document.querySelectorAll('*')].filter(el => {
//       const style = window.getComputedStyle(el);
//       const isScrollable = (
//         (el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth) &&
//         (style.overflow === 'auto' || style.overflow === 'scroll' || style.overflowY === 'auto' || style.overflowY === 'scroll') &&
//         style.display !== 'inline'
//       );
//       return isScrollable;
//     });

//     scrollables.forEach(el => {
//       el.style.outline = '2px solid red';
//       console.log('Actually scrollable element:', el);
//     });
//   }, []);

//   return null;
// };


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ScrollChecker /> */}
    <Header />
    <Hero />
    <Treatments />
    <TimeLine />
    <SocialProof />
    <About />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
