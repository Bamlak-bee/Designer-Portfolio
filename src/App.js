import React from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery';
import Shemach from '../src/components/Shemach/Shemach';
import Jivandayi from './components/Jivandayi';


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