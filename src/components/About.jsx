import React from 'react'
import {avatar} from '../images'
import '../App.css'

function About() {
    return (
        <div className='about_cont'>
            <div className="profile">
                <img src={avatar} alt="" size='50'/>
                
            </div>

            <div className="about_me" id='about'>
                <span>About Me</span> <br />
                Hello there! I'm Bamlak, a passionate Junior UI/UX designer who finds inspiration in the art of transforming a blank canvas into something stunning. For me, design is not just a profession; it's an opportunity to create something beautiful, functional, and memorable that resonates with people.

                My journey into the world of design has been exhilarating. I believe it started when I was handed a pencil. Even before I knew what I was getting into, I was keen on making anything beautiful and pleasing to the eyes - be it my notebook or even my table. The tiny scribbles and doodles turned into a hobby, that I couldn’t put a name to it. Later when I embarked on a computer science degree journey, which was also driven by the curiosity of finding out how things worked and to always keep my self up to date on revolutionary things,  I was able to discovery the world of digital designing.

                While I'm a Junior UI/UX designer, my passion for growth and learning drives me to continuously refine my skills and stay up-to-date with the latest design trends and technologies. Every day is an opportunity for me to expand my knowledge and take on exciting challenges.
<br />
                When I'm not immersed in the world of design, I am reading, watching cooking videos or listening to podcasts. 
                <br />

                Let's connect!
            </div>




        </div>
    )
}

export default About;