import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter, FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa6';
import './hero.css';
import Signature from "../signature.jsx"
import { easeIn, motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Resume from '../../assets/pdf/Bamlak_Resume.pdf'
import CopyButton from './copy';
import Navbar from '../NavBar/Navbar';

const Hero = () => {

    const fadeIn = {
        hidden: {
            opacity: 0,
            y: 1000
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 6.5,
                ease: easeIn,
                type: 'spring',
                stiffness: 20,
                ease: easeIn

            }
        }
    }
   

    return (
        <div className='container'>
            <Navbar/>

            <div className="hero-section">
                {/* fade out */}
                <div className="draw">

                    <Signature />

                </div>
                {/* fade in */}


                <motion.div className="fade-in"
                    variants={fadeIn}
                    initial='hidden'
                    animate='show'
                >

                    <h1>bamlak kebede</h1>
                    <p>A passionate UI/UX designer and an always curoius tech enthusisat.
                        I design both for mobile and web
                    </p>


                    <div className="link-container">
                        <CopyButton />
                        <Link className="about" to={Resume} target='_blank'>Resume</Link>
                    </div>

                </motion.div>

            </div>
        </div>
    )
}

export default Hero;