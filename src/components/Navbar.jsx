import React, { useRef } from 'react';
import {Menu, X } from 'lucide-react';
import pdfFile from '../assets/pdf/Bamlak_Resume.pdf';
import '../App.css'


const Navbar = () => {

  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
    return (
      <header>
        <div className="nav">
          <ul>
            <li>About me</li>
            <li>Resume</li>
          </ul>
        </div>
        <div className="left">
          <p>Bamlak Tesfaye</p>
        </div>
        <div className="right" ref={navRef}>
          <a href="#about">About</a>
          <a href={pdfFile} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <button onClick={showNavBar} className='nav-btn close-nav'>

            <X/>
          </button>
        </div>
        <button onClick={showNavBar} className='nav-btn'> 

          <Menu/>
        </button>


      </header>
    )

}

export default Navbar;