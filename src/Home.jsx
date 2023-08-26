import React from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
// import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Banner from './components/Banner/Banner.jsx/Banner';


function Home() {
  return (
    <div className='App'> 
    {/* <Navbar/> */}
    <Hero/>
      <main>
       
        <div className="gallery">
          <h1>featured work</h1>
          <Gallery />

        </div>


      </main>
      <Banner/>
     
      <Footer />
      
      </div>
  )
}

export default Home;