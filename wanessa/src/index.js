import React from 'react';
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Treatments />
    <TimeLine />
    <SocialProof />
    <About />
  </React.StrictMode>
);

reportWebVitals();
