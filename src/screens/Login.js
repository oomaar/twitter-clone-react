import React from 'react';
import './Login.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@material-ui/core';

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__feature">
                    <TwitterIcon className="Twitter feature__twitter" />
                    <h2 className="login__title">Log in to Twitter</h2>
                </div>
                <input type="text" placeholder="Phone, email or username" className="login__input" />
                <input type="password" placeholder="Password" className="login__input" />
                <Button variant="outlined" className="login__button">Log in</Button>
                <div className="login__links">
                    <a href="#" className="login__link">Forgot password?</a>
                    <span className="login__span">.</span>
                    <a href="#" className="login__link">Sign up for Twitter</a>
                </div>
            </div>
        </div>
    )
}

export default Login;
