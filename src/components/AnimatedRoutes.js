import React from 'react'
import Gallery from './Gallery';
import Shemach from '../components/Shemach/Shemach';
import Jivandayi from '../components/Jivandayi/Jivandayi';
import Home from '../Home';
import {Routes, Route, useLocation} from 'react-router-dom'

function AnimatedRoutes() {
    //had to create a new component because location is supposed to be defined inside routes
    //otherwise if i had the whole code in the app.js i keep getting errors
    const location = useLocation();

    return (

        <div>
            <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/shemach" element={<Shemach />} />
            <Route path="/jivandayi" element={<Jivandayi />} />

        </Routes>
        </div>
    )
}

export default AnimatedRoutes
