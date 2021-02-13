import React from 'react';
import "./Home.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import { Feature } from '../components';
import { Button } from '@material-ui/core';

const HomeScreen = () => {
    return (
        <>
            <div className="homescreen">
                <div className="homescreen__bg">
                    <TwitterIcon className="homescreen__bgIcon" />
                </div>

                <div className="homescreen__feature">
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

                        <Button className="banner__button">Log in</Button>
                    </div>

                    <Feature />
                </div>
            </div>
        </>
    );
}

export default HomeScreen;
