

import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;