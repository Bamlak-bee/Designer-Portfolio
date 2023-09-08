import React from 'react';
import "./shemach.css";
import ScrollToTopButton from '../ScrollToTopButton'; // Import your CSS file for styling
import {
  rec1, rec2,
  rec3, userflow,
  persona1, persona2, persona3
  , mock3, goal,
  process, overview, sol, prob,
  figma, illustrator, notion, prototype3, prototype4
} from '../../images';
import { motion } from 'framer-motion';
import { i } from 'fonts/defaultFont';
import { mainColors, tagColors, lofis, hifis, mainScreens } from '../arrays';
import Footer from '../Footer/Footer';


function Shemach() {
  const pageTransition = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        ease: [0.6, 0.5, 0.3, 0.67],
        delay: 2,
        translateY: [-10, -8, 0]

      }
    },
    exit: {
      opacity: 0
    }
  }
  const staggerAnimation = {
    initial: {
      opacity: 0,
      y: 100
    },
    //the i is the index of each div, it maps through the
    // div and delays each div by i*0.3 
    // we have to add a custom prop inside the motion.div 
    // so it recognizes it here 
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8
      }

    })

  }
  const onHover = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'smooth',
      }
    }
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

  return (
    <motion.div className='s-container'
      variants={pageTransition}
      initial='initial'
      animate='animate'
      exit='exit'

    >

      <div className="s-header">
        <div className="s-background">

        </div>
        <h1>shemach</h1>
      </div>
      <div className="main">
        <motion.div className="brief" 
         variants={scrollAnimation}
         initial='initial'
         whileInView='scroll'
         viewport={{ once: true }} >

          <div className="brief-left" >
            <h2>brief</h2>
            <p>
            Shemach is an amharic word that means “consumer” or ”shopper”
              Shemach is an e-commerce app designed to simplify and enhance the grocery shopping experience. While other e-commerce platforms have made shopping for various products effortless, there is still a lack of well-integrated grocery shopping platforms, particularly for home cooks.
              Shemach aims to bridge the gap by offering a one-stop solution for all your grocery shopping needs. With a wide range of products, including fresh produce and pantry staples, Shemach ensures that home cooks can find everything they need in one place. The app features intuitive search and filtering options, making it easy to find specific ingredients or discover new items to inspire your cooking. Detailed product information, such as nutritional facts and customer reviews, empowers users to make informed purchasing decisions.
            </p>
          </div>
          <div className="brief-right">
            <div className="tools">
              <h3>tools</h3>
              <div className="tool-img">

                <img src={figma} alt="" />
                <img src={illustrator} alt="" />
                <img src={notion} alt="" />
                <img src="" alt="" />
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

        <motion.div className="overview-cont"
          variants={staggerAnimation}
          initial='initial'
          whileInView='animate'
          custom={i}
        >


          <motion.div className="overview"
            variants={staggerAnimation}
            initial='initial'
            whileInView='animate'
            custom={i}>
            <img src={overview} alt="" />

            <div className='content'>
              <h2>Overview</h2>
              E-commerce apps have greatly simplified our lives and made shopping for anything a breeze. However, when it comes to the food industry, there is still a lack of well-integrated grocery shopping platforms. While there are numerous food delivery services and apps available, many people who prefer to cook at home face challenges finding ingredients conveniently.
              This is especially true in urban areas, where a significant proportion of the population likes to prepare meals at home but struggles to find a seamless and efficient way to purchase groceries. The main pain point here is not having everything accessible at one place.Therefore, there is a need for a comprehensive and user-friendly grocery app that caters to the unique needs and making it possible to  shop for all necessary ingredients in one place instead of having to look for them individually would greatly improve the overall shopping experience for consumers.
            </div>
          </motion.div>

          <motion.div className="overview"
            variants={staggerAnimation}
            initial='initial'
            whileInView='animate'
            custom={i}>
            <img src={prob} alt="" />

            <div className='content'>
              <h2>Problem</h2>
              E-commerce apps have greatly simplified our lives and made shopping for anything a breeze. However, when it comes to the food industry, there is still a lack of well-integrated grocery shopping platforms. While there are numerous food delivery services and apps available, many people who prefer to cook at home face challenges finding ingredients conveniently.
              This is especially true in urban areas, where a significant proportion of the population likes to prepare meals at home but struggles to find a seamless and efficient way to purchase groceries. The main pain point here is not having everything accessible at one place.Therefore, there is a need for a comprehensive and user-friendly grocery app that caters to the unique needs and making it possible to  shop for all necessary ingredients in one place instead of having to look for them individually would greatly improve the overall shopping experience for consumers.
            </div>
          </motion.div>
          <motion.div className="overview"
            variants={staggerAnimation}
            initial='initial'
            whileInView='animate'
            custom={i}>
            <img src={goal} alt="" />

            <div className='content'>
              <h2>Goal</h2>
              E-commerce apps have greatly simplified our lives and made shopping for anything a breeze. However, when it comes to the food industry, there is still a lack of well-integrated grocery shopping platforms. While there are numerous food delivery services and apps available, many people who prefer to cook at home face challenges finding ingredients conveniently.
              This is especially true in urban areas, where a significant proportion of the population likes to prepare meals at home but struggles to find a seamless and efficient way to purchase groceries. The main pain point here is not having everything accessible at one place.Therefore, there is a need for a comprehensive and user-friendly grocery app that caters to the unique needs and making it possible to  shop for all necessary ingredients in one place instead of having to look for them individually would greatly improve the overall shopping experience for consumers.
            </div>
          </motion.div>
          <motion.div className="overview"
            variants={staggerAnimation}
            initial='initial'
            whileInView='animate'
            custom={i}>
            <img src={sol} alt="" />

            <div className='content'>
              <h2>Solution</h2>
              To address these challenges, the grocery selling app has a clean and intuitive interface that makes navigation and product search easy. The app should also has a comprehensive amount of products, with accurate and up-to-date information, including product images, nutritional information, and ingredient lists. The app should also allow users to add items to their cart and checkout securely and quickly.  By designing an app that caters to users' needs, the Shemach can become the go-to destination for online grocery shopping.
            </div>
          </motion.div>
        </motion.div>

        <div className="process">
          <h2>design  process</h2>
          <img src={process} alt="" />

        </div>

        <div className="mock">
          <img src={rec3} alt="" />
          <img src={rec2} alt="" />
          <img src={rec1} alt="" />
        </div>
        <div className="user-flow">
          <h2>user flow</h2>
          <img src={userflow} alt="" />
        </div>
        <div className="persona_cont">
          <h2>user personas</h2>

          <div className="personas">
            <motion.img src={persona1} alt=""
              variants={onHover}
              initial='initial'
              whileHover='hover'

            />
            <motion.img src={persona2} alt="" variants={onHover}
              initial='initial'
              whileHover='hover' />
            <motion.img src={persona3} alt="" variants={onHover}
              initial='initial'
              whileHover='hover' />
          </div>
        </div>


        <motion.div className="mock-3"
         variants={scrollAnimation}
         initial='initial'
         whileInView='scroll'
         viewport={{ once: true }} >
          <img src={mock3} alt="" />
        </motion.div>

        <div className="style-guides">
          <h2>typography</h2>
          <div className="typo">
            <div className="font">
              <h3>Aa</h3>
              <p>sf pro</p>
            </div>
            <div className="alphabets">
              <p>abcdefghijklmonpqrstuvwxyz</p>
              <p>abcdefghijklmonpqrstuvwxyz</p>
              <p>1234567890</p>
              <div className="font-style">
                <ul>
                  <li>Light</li>
                  <li>regular</li>
                  <li>medium</li>
                  <li>semibold</li>
                  <li>bold</li>
                  <li>heavy</li>
                  <li>black</li>
                </ul>
              </div>
            </div>

          </div>
          <div className="s-color">
            <h3>color pallete</h3>
            <div className="palette">
              <div className="main-colors">
                {mainColors.map((color, i) => (
                  <motion.div className="m-color"
                    key={color}
                    style={{
                      backgroundColor: color.color
                    }}
                    variants={staggerAnimation}
                    initial='initial'
                    whileInView='animate'
                    custom={i}

                  >
                  </motion.div>
                ))}
                {mainColors.map((color, i) => (
                  <motion.p
                    variants={staggerAnimation}
                    initial='initial'
                    whileInView='animate'
                    custom={i}>{color.color}</motion.p>

                ))}


              </div>
              <div className="tag-colors">
                {tagColors.map((color, i) => (
                  <motion.div className="t-color"
                    style={{
                      backgroundColor: color.color
                    }}
                    variants={staggerAnimation}
                    initial='initial'
                    whileInView='animate'
                    custom={i}
                  >

                  </motion.div>

                ))}
                {tagColors.map((color) => (

                  <p>{color.color}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="wireframes">
            <h2>wireframes</h2>
            <motion.div className="wireframes-cont"
            >
              {lofis.map((lofi, i) => (
                <motion.img src={lofi.lofi} alt=""
                  variants={staggerAnimation}
                  initial='initial'
                  whileInView='animate'
                  custom={i}
                />
              ))}

            </motion.div>
          </div>
          <div className="hi-fi">
            <h3>hi-fi designs</h3>
            <div className="onboarding">
              {hifis.map((hifi,i) => (
                <motion.img src={hifi.hifi} alt="" 
                 variants={staggerAnimation}
                initial='initial'
                whileInView='animate'
                custom={i} />
              ))}


            </div>
            <div className="main-screens">
              {mainScreens.map((mainScreen,i)=>(
                <motion.img src={mainScreen.scr} alt="" srcset=""
                variants={staggerAnimation}
            initial='initial'
            whileInView='animate'
            custom={i} />
              ))}
              {/* <img src={scr7} alt="" />
              <img src={scr8} alt="" />
              <img src={scr9} alt="" />
              <img src={scr10} alt="" /> */}


            </div>
          </div>
        </div>
        <div className="prototypes">
          <h2>Interactions</h2>
          <div className="proto-videos">

            <video autoPlay loop >
              <source src={prototype4} type='video/mp4' />
            </video>
            <video autoPlay loop >
              <source src={prototype3} type='video/mp4' />
            </video>
          </div>
        </div>
        <div className="footer-link">
          <a href="https://www.behance.net/gallery/169587475/Shemach-grocery-app-case-study" target='_blank' rel="noopener noreferrer">Check out the full case study on Behance</a>
          <ScrollToTopButton />
        </div>
      </div>
      <Footer/>
    </motion.div>

  )
}

export default Shemach;