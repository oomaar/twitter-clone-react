import React, { useState } from 'react';
import { Feed, Footer, Sidebar, SmallBtn, Widgets } from '../components';
import { GlobalDarkStyles } from '../GlobalDarkStyles';
import "./Browse.css";

export default function BrowseScreen() {
    const [darkMode, setDarkMode] = useState(false);
    const darker = () => setDarkMode(prev => !prev);

    return (
        <>
            {darkMode && <GlobalDarkStyles />}
            <div className={`app ${darkMode && 'darkApp'}`}>
                <Sidebar />
                <Feed setDark={darker} />
                {/* <SmallBtn />  Only shows on small viewport this was just a demo */}
                <Footer /> {/* Only shows on small viewport */}
                <Widgets />
            </div>
        </>
    )
}