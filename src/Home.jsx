import React from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Navbar from './components/NavBar/Navbar';

function Home() {
  return (
    <div className='App'> 
    <Navbar/>
      <main>
       
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