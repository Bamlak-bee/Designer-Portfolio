import React from 'react';
import Gallery from './components/Gallery';
import About from './components/About';
// import Navbar from './components/NavBar/Navbar';
import Hero from './components/Hero/Hero.jsx';
import Banner from './components/Banner/Banner.jsx';
import { motion } from 'framer-motion';
import Footer from './components/Footer/Footer';


function Home() {
  
  return (
    <motion.div className='App'> 
    {/* <Navbar/> */}
    <Hero/>
      <main>
       
        <div className="gallery">
          <Gallery />

        </div>
      </main>
      <Banner/>
     
      <About />
      <Footer/>
      
      </motion.div>
  )
}

export default Home;