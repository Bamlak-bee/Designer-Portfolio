import React from 'react'
import './jivandayi.css'
import {motion } from 'framer-motion'
import {
  jmock, jmock2, jmock5, jphoto, jmock7, jmock4, logo
} from '../../images'
import { emojis, colors, categories } from '../arrays'


function Jivandayi() {

  const staggerAnimation = {
    initial: { opacity: 0, y: -100 },
    //the i is the index of each div, it maps through the
    // div and delays each div by i*0.3 
    // we have to add a custom prop inside the motion.div 
    // so it recognizes it here 
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.3
      }

    })

  }
  const scrollAnimation = {
    initial: {
      opacity:0,
      scale:0.8,
      y: -50
    },
    scroll :{
      opacity: 1,
      scale: 1,
     y:50,
     transition: {
      stiffness: 20,
      type : 'spring',
      delay: 0.1
     },
    }
  }

  return (
    <div className='j-container'>
      <div className="j-header">
        <div className="j-background">

        </div>

        <h1
        >jivandayi</h1>
        <p>mental health app.</p>
      </div>


      <motion.div className="brief"
      variants={scrollAnimation}
      initial = 'initial'
      whileInView= 'scroll'
      viewport={{once: true}}
           >
      
            
        <div className="brief-left" >
          <h2>brief</h2>
          <p>Jivandyai means "giving life".
            Jivandayi is an app for improving mental health.
            It offers multiple methods to alleviate mental health issues.
            It was a redesign project. I was repsonsible for redesigning the screens,
            creating custom illustrations, and prototypes

          </p>
        </div>
      
        <div className="brief-right">
            <h2>The project</h2>
          <p>
            <ul>
              <li>Jivandayi app</li>
              <li>Mobile app</li>
              <li>Redesign app</li>
              <li> </li>
            </ul>
          </p>
        </div>

      </motion.div>

      <motion.div className="mock-1" 
      variants={scrollAnimation}
      initial = 'initial'
      whileInView= 'scroll'
      viewport={{once: true}}
      >

        <img src={jmock} alt="" />
      </motion.div>

      <div className="photo-cont">
        <img src={jmock2} alt="" srcset="" />

      </div>

      <div className="color-pallete">
        <h2>Pallete</h2>
        <div className="colors">
          {colors.map((color, i) => (
            <motion.div
              style={{
                backgroundColor: color.color
              }
              }
              className="color"
              key={color.id}
              variants={staggerAnimation}
              initial='initial'
              whileInView='animate'
              custom={i}
            >
              <p>{color.color}</p>

            </motion.div>
          ))}
        </div>
      </div>

      <div className="categories">

        <div className="category">
          {categories.map((image) => (
            <img src={image.image}
              className='category_photo'
              alt=''
              style={{
                borderRadius: image.border

              }}

            />

          ))}
        </div>
        <div className="category_mock">

          <img src={jmock4} alt="" srcset="" />
        </div>

      </div>
      <div className="emotions">
        <div className='emojis'>
          {
            emojis.map((emoji) => (

              <img src={emoji.emoji} alt="" className='emoji' />
            ))
          }


        </div>

      </div>

      <div className="mock-3">
        <img src={jmock5} alt="" />
      </div>
      <div className="photo">
        <img src={jphoto} alt="" />
        <img src={jmock7} alt="" />

      </div>

      <div className="logo-cont">
        <img src={logo} alt="logo" />

        <h3>jivandayi</h3>
      </div>

    </div>
  )
}

export default Jivandayi