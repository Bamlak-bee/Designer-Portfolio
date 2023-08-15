import React from 'react';
import '../App.css';
import { 
landing,
shemach,jivan,
web ,phone,pen }
from '../images'

import { Link } from 'react-router-dom';

function Gallery() {

    return (
        <div className="gallery-photos">
            
            <div className="item1">
                <Link to="/shemach">
                    <img src={shemach} alt="" />
                </Link>
                
                <p>Shemach - a grocery delivery platform</p>
                <div className="details">
                <div className="detail1">
                    <img src={phone}  alt="" /> Mobile app
                </div>
                <div className="detail2">
                    <img src={pen} alt="" />case study
                </div>
                </div>
                
            </div>

            <div className="item1">
               <Link to="/jivandayi"><img src={jivan} alt="" />
               </Link> 
                <p>Jivandayi - a mental helath app </p>
                <div className="details">
                <div className="detail1">
                <img src={phone}  alt="" />Mobile app
                </div>
                <div className="detail2">
                <img src={pen} alt="" />
                    redesign
                </div>
                </div>
               
            </div>
            <div className="item1">
                <img src={landing} alt="" />
                <p>Landing page - photography portfolio </p>
                <div className="details">
                <div className="detail1">
                    <img src={web} alt="" /> Landing page
                </div>
                <div className="detail2">
                    <img src={pen} alt="" />
                    redesign
                </div>
                </div>
                
               
            </div>
           

   

        </div>
    )
}

export default Gallery;