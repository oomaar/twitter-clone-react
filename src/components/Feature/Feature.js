import React from 'react';
import "./Feature.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import { Link } from 'react-router-dom';

const Feature = () => {
    return (
        <div className="feature">
            <div className="feature__brand">
                <TwitterIcon className="Twitter feature__twitter" />
                <h1 className="feature__title">Happening now</h1>
                <h2 className="feature__text">Join Twitter today.</h2>
            </div>
            <div className="feature__buttons">
                <Link to="/signup" className="feature__link">
                    <span>Sign up</span>
                </Link>
                <Link to="/login" className="feature__link feature__login__link">
                    <span>Log in</span>
                </Link>
            </div>
        </div>
    )
}

export default Feature;
