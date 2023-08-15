import React from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function Home() {
  return (
    <div className='App'> 
    <Navbar/>
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


      </main>
      <div className="banner">
          <ul>
            <li>Mobile design</li>
            <li>web design</li>
            <li>illustrations</li>
            <li>logo design</li>
          </ul>
        </div>
      <Footer />
      </div>
  )
}

export default Home;