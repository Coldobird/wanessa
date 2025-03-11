import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header.js';
import Hero from './Hero.js';
import './index.css';
import Treatments from './Treatments.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Treatments />
  </React.StrictMode>
);

reportWebVitals();
