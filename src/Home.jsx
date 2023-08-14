import React from 'react';
import Gallery from './Gallery';
// import Banner from './Banner';
// import psd from './photoshop.png';
// import figma from './figma.png';
// import illustrator from './illustrator.png';
import Footer from './Footer';

function Home() {
  return (
    <div className='App'> <header>
    <p>Bamlak Tesfaye</p>
    <a href="#about">About</a>
  </header>
  <main>

    <div className="contact">
      <div className="about" >Hello, I am Bamlak, a passionate UI/UX designer and an always curious tech enthusiast.  I specialize in designing for both web and mobile platforms.</div>
      <div className='links'>
        <p>Let's work together:</p>
        <a href='bamlakbee.12@gmail.com'>bamlakbee.12@gmail.com</a>

      </div>
      <img src="./link.svg" alt="" />
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
  <Footer/></div>
  )
}

export default Home