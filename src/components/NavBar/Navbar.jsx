import React, { useRef } from 'react';
import { FaTwitter, FaBehance, FaDribbble, FaX, FaBars, FaLinkedin } from 'react-icons/fa6';

import pdfFile from '../../assets/pdf/Bamlak_Resume.pdf';
import './Navbar.css'


const Navbar = () => {

  const navRef = useRef(null);
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');
  }
  return (
    <header>
      <div className="nav">
        <div className="left">
          <p>Bamlak Tesfaye</p>
        </div>
        <div className="right" ref={navRef}>
          <ul>
            <li> <a href="https://google.com">About me</a></li>
            <li><a href={pdfFile} target="_blank" rel="noopener noreferrer">Resume </a></li>

          </ul>
          <FaX className='nav-btn close-btn' onClick={showNavBar} size={16} />
        </div>
        <FaBars className='nav-btn' onClick={showNavBar} size={16} />
      </div>
      <div className="contact">
        <div className="about" >Hello, I am Bamlak, a passionate UI/UX designer and an always curious tech enthusiast. <br />  I design for both web and mobile platforms.</div>
        <div className='links'>
          <p>Let's work together:</p>
          <a href='bamlakbee.12@gmail.com'>bamlakbee.12@gmail.com</a>
          <div className="social-wrapper">
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter size={32} color='#FFD100'/></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} color='#FFD100' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaBehance size={32} color='#FFD100' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaDribbble size={32} color='#FFD100' /></a>
            
          </div>

        </div>
      </div>
    </header>
  )

}

export default Navbar;