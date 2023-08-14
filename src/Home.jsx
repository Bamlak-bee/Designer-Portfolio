import React from 'react';
import Gallery from './Gallery';
import pdfFile from './pdf/Bamlak_Resume.pdf';
import Footer from './Footer';

function Home() {
  return (
    <div className='App'> 
    <header>
      <div className="left">

      <p>Bamlak Tesfaye</p>
      </div>
      <div className="right">
      <a href="#about">About</a>
      <a href={pdfFile} target="_blank" rel="noopener noreferrer">
         Resume
      </a>
      </div>
      
    </header>
      <main>

        <div className="contact">
          <div className="about" >Hello, I am Bamlak, a passionate UI/UX designer and an always curious tech enthusiast.  I design for both web and mobile platforms.</div>
          <div className='links'>
            <p>Let's work together:</p>
            <a href='bamlakbee.12@gmail.com'>bamlakbee.12@gmail.com</a>
            
          </div>
        </div>

        <div className="gallery">
          <h1>featured work</h1>
          <Gallery />

        </div>

        <div className="banner">
          <ul>
            <li>Mobile design</li>
            <li>web design</li>
            <li>illustrations</li>
            <li>logo design</li>
          </ul>
        </div>


      </main>
      <Footer /></div>
  )
}

export default Home;