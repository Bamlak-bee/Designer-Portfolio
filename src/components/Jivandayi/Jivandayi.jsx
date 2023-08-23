import React from 'react'
import './jivandayi.css'
import { motion } from 'framer-motion'
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
        delay: i * 0.3,
      }
    })

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

      <div className="brief">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa perspiciatis, deserunt dolorem nobis cumque magni illo tenetur iste porro debitis?
        <img src="" alt="" />
      </div>

      <div className="mock-1">

        <img src={jmock} alt="" />
      </div>

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