import React from 'react';
import { Button } from '@material-ui/core';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
                <input className="banner__input" type="text" placeholder="Phone, email, or username" />
                <input className="banner__input" type="password" placeholder="Password" />
                <Button variant="outlined" className="banner__button">Log in</Button>
        </div>
    )
}

export default Banner;
