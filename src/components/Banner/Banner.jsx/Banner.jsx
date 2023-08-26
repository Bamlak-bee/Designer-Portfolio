import React from 'react'
import Marquee from 'react-fast-marquee';
import './banner.css'


function Banner() {
  return (
    <div className='banner'>
        <Marquee
        pauseOnHover = 'true'
        speed={150}
        >

        <ul>
            <li>Mobile app design</li>
            <li>Mobile app design</li>
            <li>Mobile app design</li>
            <li>Mobile app design</li>
            <li>Mobile app design</li>
            <li>Mobile app design</li>
            <li>Web Design</li>s
            <li>c</li>
            <li>c</li>
        </ul>
        </Marquee>
        



    </div>
  )
}

export default Banner