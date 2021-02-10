import React from 'react';
import { Banner, TwitterBG } from '../components';
import "./Home.css";

const HomeScreen = () => {
    return (
        <div className="homescreen">
            {/* TwitterBG */}
            <TwitterBG />

            {/* topbar */}
            <Banner />
            {/* Feature */}

            {/* Fotter */}
        </div>
    )
}

export default HomeScreen;
