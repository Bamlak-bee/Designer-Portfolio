import React, { useRef } from 'react';
import { FaTwitter, FaBehance, FaDribbble, FaX, FaBars, FaLinkedin } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import './Navbar.css'


const Navbar = () => {

  const navRef = useRef(null);
  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_nav');

    
  }
  const onHover = {
    initial: {
        y: 0
    },
    hover: {
        y: [-6,-5,-4,-3,-2,-1,0],
        transition: {
            type: 'bounce'
        }
    }
}
  return (
    <header>
      <div className="links">
                
                <div className='availablity'>
                    <Dot size={36} color='#FFD100' fill= 'white'>

                    </Dot>
                 <p> Available for work</p>  
                </div>
                <div className="right" ref={navRef}>

                <ul>
                    <motion.li
                     variants={onHover}
                     initial='initial'
                     whileHover="hover"
                    >
                        <motion.a href="https://twitter.com/Bamlak_b" target="_blank" rel="noopener noreferrer"
                           
                        >
                            <FaTwitter size={32}  color='#FFD100' /></motion.a>
                            <p>Twitter</p>
                    </motion.li>
                    <motion.li 
                     variants={onHover}
                            initial='initial'
                            whileHover="hover">

                        <a href="https://www.linkedin.com/in/bamlak-kebede-508689193/" target="_blank" rel="noopener noreferrer"
                        ><FaLinkedin size={32} color='#FFD100'

                            /></a>
                            <p>Linkedin</p>
                    </motion.li>
                    <motion.li  variants={onHover}
                            initial='initial'
                            whileHover="hover">

                        <a href="https://www.behance.net/bamlakkebede" target="_blank" rel="noopener noreferrer"><FaBehance size={32} color='#FFD100' /></a>
                  <p>Behance</p> 
                    </motion.li>
                    <motion.li 
                     variants={onHover}
                     initial='initial'
                     whileHover="hover">

                        <a href="https://dribbble.com/bamlakT" target="_blank" rel="noopener noreferrer"><FaDribbble size={32} color='#FFD100' /></a>
                        <p>Dribble</p>
                    </motion.li>
                </ul>
                <FaX className='nav-btn close-btn' onClick={showNavBar} size={24} color='#d6d6d6' />
                </div>
                <FaBars className='nav-btn' onClick={showNavBar} size={24}
                />
            </div>

    </header>
  )

}

export default Navbar;