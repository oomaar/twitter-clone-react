import React from 'react';
import "./Feature.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';

const Feature = () => {
    return (
        <div className="feature">
            <TwitterIcon className="Twitter feature__twitter" />
            <h1 className="feature__title">Happening now</h1>
            <h2 className="feature__text">Join Twitter today.</h2>
            <div className="feature__buttons">
            <Button variant="outlined" className="banner__signup__button">Sign up</Button>
            <Button variant="outlined" className="banner__login__button">Log in</Button>
            </div>
        </div>
    )
}

export default Feature;
