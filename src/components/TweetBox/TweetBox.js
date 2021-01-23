import React, { useState } from 'react';
import "./TweetBox.css";
import { SidebarOption } from '..';
import { Avatar, Button } from '@material-ui/core';
import db from "../../lib/firebase";
import setTextareaHeight from "../../functions/setTextareaHeight";
import ImageIcon from '@material-ui/icons/Image';
import GifIcon from '@material-ui/icons/Gif';
import BarChartIcon from '@material-ui/icons/BarChart';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import EventNoteIcon from '@material-ui/icons/EventNote';

export default function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = event => {
        event.preventDefault();

        db.collection('posts').add({
            displayName: "Omar Hassan",
            userName: "omaar_5",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1343342767695671298/l4vS2o1B_400x400.jpg",
        });
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://pbs.twimg.com/profile_images/1343342767695671298/l4vS2o1B_400x400.jpg" alt="My Image In Ramadan 2018" />

                    <textarea
                        id="tweetbox-textArea"
                        placeholder="What's happening?"
                        rows="2"
                        cols="2"
                        value={tweetMessage}
                        onChange={event => (
                            setTweetMessage(event.target.value)+
                            setTextareaHeight(event, "100px")+
                            console.log("Just Testing The On Click Function For Fun !!!")
                        )}
                    >
                    </textarea>
                </div>
                <input
                    className="tweetBox__imageInput"
                    placeholder="Optional: Paste an image URL"
                    type="text"
                    value={tweetImage}
                    onChange={event => setTweetImage(event.target.value)}
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
            <div className="tweetbox__icons">
                <SidebarOption Icon={ImageIcon} text="" />
                <SidebarOption Icon={GifIcon} text="" />
                <SidebarOption Icon={BarChartIcon} text="" />
                <SidebarOption Icon={EmojiEmotionsIcon} text="" />
                <SidebarOption Icon={EventNoteIcon} text="" />
            </div>
        </div>
    )
}
