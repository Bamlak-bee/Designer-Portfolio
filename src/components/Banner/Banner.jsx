import React from 'react'
import './banner.css'
import Marquee from 'react-fast-marquee'

function Banner() {
  return (
    <div className='banner'>
        <Marquee
        pauseOnHover = 'true'
        speed={150}
        >

        <ul>
            <li>Mobile app design</li>
            <li>Web Design</li>
            <li>Illustration</li>
            <li>Mobile app design</li>
            <li>Web Design</li>
            <li>Illustration</li>
            <li>Mobile app design</li>
            <li>Web Design</li>
            <li>Illustration</li>
            <li>Mobile app design</li>
            <li>Web Design</li>
            <li>Illustration</li>
            <li>Mobile app design</li>
            <li>Web Design</li>
            <li>Illustration</li>
            <li>Mobile app design</li>
            <li>Web Design</li>
        </ul>
        </Marquee>
        



    </div>
  )
}

export default Banner