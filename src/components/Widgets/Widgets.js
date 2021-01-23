import React from 'react';
import "./Widgets.css";
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
    TwitterMomentShare,
    TwitterVideoEmbed,
    TwitterFollowButton
} from 'react-twitter-embed';
import { Search } from '@material-ui/icons';

// This is the Docs of 'react-twitter-embed' --> https://www.npmjs.com/package/react-twitter-embed

export default function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <Search className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={'1352742021123907585'} />

                {/* <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="supercarblondie"
                    options={{ height: 400 }}
                /> */}

                <TwitterFollowButton
                    screenName={'cleverqazi'}
                />

                <TwitterShareButton
                    url={"https://facebook.com/omarhassan16694"}
                    options={{ text: "#awesome Twitter Clone With React", via: "Omaar_5" }}
                />

                {/* <TwitterVideoEmbed
                    id={'560070183650213889'}
                />

                <TwitterMomentShare
                    momentId={'650667182356082688'}
                /> */}
            </div>
        </div>
    )
}
