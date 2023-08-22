import React from 'react';
import "./shemach.css";
// import Table from './Table';
import ScrollToTopButton from '../ScrollToTopButton'; // Import your CSS file for styling
import {
  rec1,rec2,
  rec3,userflow,
  persona1,persona2,persona3
,mock3,lofi1,
  lofi2,lofi3,lofi4,lofi5,lofi6,lofi7,lofi8, goal,
  process,overview,sol,prob, scr1,scr2, scr3,scr4,scr5,scr6,scr7,scr8,scr9,scr10
} from '../../images';

function Shemach() {
  return (
    <div className='container'>
      <div className="header">
        <div className="background">

        </div>
          <h1>shemach</h1>
          <p>A grocery delivery app. <br />
            Shemach is an amharic word that means “consumer” or ”shopper”</p>
      </div>
      <div className="main">
        <div className="overview">
          <img src={overview} alt="" />

          <div className='content'>
            <h1>Overview</h1>
            E-commerce apps have greatly simplified our lives and made shopping for anything a breeze. However, when it comes to the food industry, there is still a lack of well-integrated grocery shopping platforms. While there are numerous food delivery services and apps available, many people who prefer to cook at home face challenges finding ingredients conveniently.
            This is especially true in urban areas, where a significant proportion of the population likes to prepare meals at home but struggles to find a seamless and efficient way to purchase groceries. The main pain point here is not having everything accessible at one place.Therefore, there is a need for a comprehensive and user-friendly grocery app that caters to the unique needs and making it possible to  shop for all necessary ingredients in one place instead of having to look for them individually would greatly improve the overall shopping experience for consumers.
          </div>
        </div>

        <div className="overview">
          <img src={prob} alt="" />

          <div className='content'>
            <h1>Problem</h1>
            E-commerce apps have greatly simplified our lives and made shopping for anything a breeze. However, when it comes to the food industry, there is still a lack of well-integrated grocery shopping platforms. While there are numerous food delivery services and apps available, many people who prefer to cook at home face challenges finding ingredients conveniently.
            This is especially true in urban areas, where a significant proportion of the population likes to prepare meals at home but struggles to find a seamless and efficient way to purchase groceries. The main pain point here is not having everything accessible at one place.Therefore, there is a need for a comprehensive and user-friendly grocery app that caters to the unique needs and making it possible to  shop for all necessary ingredients in one place instead of having to look for them individually would greatly improve the overall shopping experience for consumers.
          </div>
        </div>
        <div className="overview">
          <img src={goal} alt="" />

          <div className='content'>
            <h1>Goal</h1>
            E-commerce apps have greatly simplified our lives and made shopping for anything a breeze. However, when it comes to the food industry, there is still a lack of well-integrated grocery shopping platforms. While there are numerous food delivery services and apps available, many people who prefer to cook at home face challenges finding ingredients conveniently.
            This is especially true in urban areas, where a significant proportion of the population likes to prepare meals at home but struggles to find a seamless and efficient way to purchase groceries. The main pain point here is not having everything accessible at one place.Therefore, there is a need for a comprehensive and user-friendly grocery app that caters to the unique needs and making it possible to  shop for all necessary ingredients in one place instead of having to look for them individually would greatly improve the overall shopping experience for consumers.
          </div>
        </div>
        <div className="overview">
          <img src={sol} alt="" />

          <div className='content'>
            <h1>Solution</h1>
            To address these challenges, the grocery selling app has a clean and intuitive interface that makes navigation and product search easy. The app should also has a comprehensive amount of products, with accurate and up-to-date information, including product images, nutritional information, and ingredient lists. The app should also allow users to add items to their cart and checkout securely and quickly.  By designing an app that caters to users' needs, the Shemach can become the go-to destination for online grocery shopping.
          </div>
        </div>
        

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
          <img src={userflow} alt="" />
        </div>
        <div className="persona_cont">
          <h2>user personas</h2>

          <div className="personas">
            <img src={persona1} alt="" />
            <img src={persona2} alt="" />
            <img src={persona3} alt="" />
          </div>
        </div>


        <div className="mock-3">
          <img src={mock3} alt="" />
        </div>

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
          <div className="color">
            <h3>color pallete</h3>
            <div className="palette">
              <div className="main-colors">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>primary
                  #97CC04</div>
                <div>secondary
                  #EEB902</div>
                <div>Accent
                  #f45D01</div>
                <div>text
                  #474647
                </div>
              </div>
              <div className="tag-colors">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div>#C8E6A9</div>
                <div>#F3DAA3</div>
                <div>#FF9F7F</div>
                <div>#99BEEB
                </div>
              </div>
            </div>
          </div>

          <div className="wireframes">
            <h3>wireframes</h3>
            <div className="wireframes-cont">
              <img src={lofi1} alt="" />
              <img src={lofi2} alt="" />
              <img src={lofi3} alt="" />
              <img src={lofi4} alt="" />
              <img src={lofi5} alt="" />
              <img src={lofi6} alt="" />
              <img src={lofi7} alt="" />
              <img src={lofi8} alt="" />
            </div>
          </div>
          <div className="hi-fi">
            <h3>hi-fi designs</h3>
            <div className="onboarding">
      
            <img src={scr1} alt="" />
            <img src={scr2} alt="" />
            <img src={scr3} alt="" />
            <img src={scr3} alt="" />
            <img src={scr4} alt="" />
            <img src={scr5} alt="" />
            <img src={scr6} alt="" />
            
            </div>
            <div className="signup">
            <img src={scr7} alt="" />
            <img src={scr8} alt="" />
            <img src={scr9} alt="" />
            <img src={scr10} alt="" />
           
            
            </div>
          </div>
        </div>
        <div className="footer">
          <a href="https://www.behance.net/gallery/169587475/Shemach-grocery-app-case-study" target='_blank' rel="noopener noreferrer">Check the full case study on Behance</a>
          <ScrollToTopButton/>
        </div>
      </div>
    </div>

  )
}

export default Shemach;