import React, { forwardRef } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUserRounded } from '@material-ui/icons';

export default function Post({ displayName, userName, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedUserRounded className="post__badge" />} @{userName}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <div style={{ backgroundImage: "url(" + image + ")" }} className="post__img">
                    {/* <img src={image} /> */}
                </div>
                <div className="post__footer">
                    <ChatBubbleOutline className="post__footerIcon" fontSize="small" />
                    <Repeat className="post__footerIcon" fontSize="small" />
                    <FavoriteBorder className="post__footerIcon" fontSize="small" />
                    <Publish className="post__footerIcon" fontSize="small" />
                </div>
            </div>
        </div>
    )
}
