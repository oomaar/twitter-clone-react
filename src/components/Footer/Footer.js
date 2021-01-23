import React from 'react';
import "./Footer.css";
import { SidebarOption } from '..';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

export default function Footer() {
    return (
        <footer className="footer__smScreen">
            <SidebarOption active Icon={HomeIcon} text="" />
            <SidebarOption Icon={SearchIcon} text="" />
            <SidebarOption Icon={NotificationsNoneIcon} text="" />
            <SidebarOption Icon={MailOutlineIcon} text="" />
        </footer>
    )
}
