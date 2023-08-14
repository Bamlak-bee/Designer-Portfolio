import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Gallery from './Gallery';
import Shemach from './Shemach';
import Jivandayi from './Jivandayi';





function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/gallery" element={<Gallery />} />
          <Route path="/shemach" element={<Shemach />} />
          <Route path="/jivandayi" element={<Jivandayi />} />



        </Routes>
      </Router>


    </div>
  );
};

export default App;