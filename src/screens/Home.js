import React from 'react';
import { HappeningNow, TwitterBG } from '../components';
import "./Home.css";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            {/* TwitterBG */}
            <TwitterBG />

            {/* Banner */}
            {/* Feature */}
            <HappeningNow />

            {/* Fotter */}
        </div>
    )
}

export default HomeScreen;
