import React from 'react';
import "./Feature.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className="feature">
            <TwitterIcon className="Twitter feature__twitter" />
            <h1 className="feature__title">Happening now</h1>
            <h2 className="feature__text">Join Twitter today.</h2>
            <div className="feature__buttons">
                <Button variant="outlined" className="feature__signup__button">Sign up</Button>
                <Link to="/login" className="feature__link">
                    <Button variant="outlined" className="feature__login__button">Log in</Button>
                </Link>
            </div>
        </div>
    )
}

export default Feature;
