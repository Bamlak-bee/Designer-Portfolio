import React from 'react';
import Gallery from './components/Gallery';
import About from './components/About';
import Hero from './components/Hero/Hero.jsx';
import Banner from './components/Banner/Banner.jsx';
import { motion } from 'framer-motion';
import Footer from './components/Footer/Footer';


function Home() {
  
  return (
    <motion.div className='App'> 
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