import React from 'react'
import { FaTwitter, FaBehance, FaDribbble, FaLinkedin } from 'react-icons/fa6';
import './hero.css';
import Signature from "../signature.jsx"


const Hero = () => {
    return (
        <div className='container'>
            <div className="links">
                <ul>
                    <li>
                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaTwitter size={32} color='#FFD100' /></a>
                    </li>
                    <li>

                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} color='#FFD100' /></a>
                    </li>
                    <li>

                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaBehance size={32} color='#FFD100' /></a>
                    </li>
                    <li>

                        <a href="http://" target="_blank" rel="noopener noreferrer"><FaDribbble size={32} color='#FFD100' /></a>
                    </li>
                </ul>
            </div>

            <div className="hero-section">
                {/* fade out */}
                <div className="draw">
                    
                    <Signature/>

                </div>
                {/* fade in */}
                <div className="fade-in">

                    <h1>bamlak</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, exercitationem?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, laborum.
                    </p>
                    <a href='bamlakbee.12@gmail.com'>bamlakbee.12@gmail.com</a>
                    <p className='availablity'>Available for work</p>

                    <div className="btn-container">
                        <button className="about">About</button>
                        <button className="about">Resume</button>
                    </div>





                </div>







            </div>







        </div>
    )
}

export default Hero;