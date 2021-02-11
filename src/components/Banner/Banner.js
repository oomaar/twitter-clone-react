import React from 'react';
import { Button } from '@material-ui/core';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">

            <div className="banner__input__container">
                <input type="text" className="banner__input" />
                <label className="banner__input__label">
                    <span className="banner__label__span">Phone, email or username</span>
                </label>
            </div>

            <div className="banner__input__container">
                <input type="password" className="banner__input" />
                <label className="banner__input__label">
                    <span className="banner__label__span">Password</span>
                </label>
            </div>

            <Button variant="outlined" className="banner__button">Log in</Button>
        </div>
    )
}

export default Banner;
