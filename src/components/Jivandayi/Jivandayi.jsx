import React from 'react'
import './jivandayi.css'
import { motion } from 'framer-motion'
import {
  jmock, jmock2, jmock5, jphoto, jmock7, jmock4, figma, photoshop, illustrator,j_proto,j_proto2
} from '../../images'
import { emojis, colors, categories } from '../arrays';
import Footer from '../Footer/Footer';
import ScrollToTopButton from '../ScrollToTopButton';



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
      opacity: 0,
      scale: 0.8,
      y: -50
    },
    scroll: {
      opacity: 1,
      scale: 1,
      y: 50,
      transition: {
        stiffness: 20,
        type: 'spring',
        delay: 0.1
      },
    }
  }
  const pageTransition = {
    initial: { height: 0 },
    animate: {
      height: '100%',
      transition: {
        ease: [0.6, 0.5, 0.3, 0.67],
        delay: 2,
        translateY: [-10, -8, 0]

      }
    },
    exit: {
      y: window.innerHeight
    }
  }
  return (
    <motion.div className='j-container'
      variants={pageTransition}
      initial='initial'
      animate='animate'
      exit='exit'>
      <div className="j-header">
        <div className="j-background">

        </div>

        <h1
        >jivandayi</h1>
       
      </div>
      <motion.div className="brief"
        variants={scrollAnimation}
        initial='initial'
        whileInView='scroll'
        viewport={{ once: true }}  >

        <div className="brief-left" >
          <h2>brief</h2>
          <p>Jivandyai, meaning "giving life," is a mobile application focused on enhancing mental health and well-being. The app provides users with various methods to alleviate mental health issues, aiming to create a positive impact on users' emotional and psychological well-being. I was responsible for the redesign of the existing app, with a focus on enhancing user experience, visual appeal, and functionality.

          </p>
        </div>
        <div className="brief-right">
          <div className="tools">
            <h3>tools</h3>
            <div className="tool-img">

              <img src={figma} alt="" />
              <img src={illustrator} alt="" />
              <img src={photoshop} alt="" />
            </div>
          </div>
          <div className="timeline">
            <h3>timeline</h3>
            <p>2 months</p>
          </div>
          <div className="project">
            <h3>project</h3>
            <p>redesign</p>
          </div>
        </div>



      </motion.div>

      <motion.div className="mock-1"
        variants={scrollAnimation}
        initial='initial'
        whileInView='scroll'
        viewport={{ once: true }}
      >

        <img src={jmock} alt="" />
      </motion.div>

      <motion.div className="photo-cont" 
      variants={scrollAnimation}
      initial='initial'
      whileInView='scroll'

      viewport={{ once: true }}
      >
        <img src={jmock2} alt="" srcset="" />

      </motion.div>

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

            </motion.div>
          ))}

          {colors.map((color) => (

            <p>{color.color}</p>
          ))}

        </div>
      </div>

      <motion.div className="categories" 
      variants={scrollAnimation}
      initial='initial'
      whileInView='scroll'
      viewport={{ once: true }}
      >

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

      </motion.div>
      <div className="emotions">
        <motion.div className='emojis'
         variants={scrollAnimation}
         initial='initial'
         whileInView='scroll'
         viewport={{ once: true }}
        >
          {
            emojis.map((emoji,i) => (

              <img src={emoji.emoji} alt="" className='emoji'
             />
            ))
          }


        </motion.div>

      </div>

      <motion.div className="mock-3"  
      variants={scrollAnimation}
      initial='initial'
      whileInView='scroll'
      viewport={{ once: true }}>
        <img src={jmock5} alt="" />
      </motion.div>
      <motion.div className="photo" 
       variants={scrollAnimation}
       initial='initial'
       whileInView='scroll'>
        <img src={jphoto} alt="" />
        <img src={jmock7} alt="" />

      </motion.div>

      <div className="interactions">
        <h3>interactions</h3>
        <div className="proto-videos">

          <video autoPlay loop >
            <source src={j_proto} type='video/mp4' />
          </video>
          <video autoPlay loop>
            <source src={j_proto2} type='video/mp4' />
          </video>
        </div>
      </div>
      <Footer/>
<ScrollToTopButton/>
    </motion.div>
  )
}

export default Jivandayi