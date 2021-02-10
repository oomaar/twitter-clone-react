import React from 'react';
import "./TwitterBG.css";
import TwitterIcon from '@material-ui/icons/Twitter';

const TwitterBG = () => {
    return (
        <div className="twitterbg">
            {/* <img src="/images/bg.png" alt="Twitter Background"/> */}
            <div className="twitterbg__logo">
                <TwitterIcon className="twitterbg_twitter" />
            </div>
        </div>
    )
}

export default TwitterBG;
