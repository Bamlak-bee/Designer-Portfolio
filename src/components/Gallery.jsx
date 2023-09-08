import React from 'react';
import '../App.css';
import {
    landing,
    shemach, jivan, phone, pen
}
    from '../images'

import { Link } from 'react-router-dom';

function Gallery() {

    return (
        <div className="gallery-photos">

            <div className="item">
                <Link to="/shemach">
                    <img src={shemach} alt="" />
                </Link>

                <p>Shemach - a grocery delivery platform</p>
                <div className="details">
                    <div className="detail1">
                        <img src={phone} alt="" /> Mobile app
                    </div>
                    <div className="detail2">
                        <img src={pen} alt="" />case study
                    </div>
                </div>

            </div>

            <div className="item">
                <Link to="/jivandayi"><img src={jivan} alt="" />
                </Link>
                <p>Jivandayi - a mental helath app </p>
                <div className="details">
                    <div className="detail1">
                        <img src={phone} alt="" />Mobile app
                    </div>
                    <div className="detail2">
                        <img src={pen} alt="" />
                        redesign
                    </div>
                </div>

            </div>
            <div className="coming-soon">
             <img src={landing} alt="" />
            <h3>coming soon</h3>
            </div>


        </div>
    )
}

export default Gallery;