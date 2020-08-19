import React from 'react';
import "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";


function Header() {
    return (
      <div className="header">
        <IconButton>
          <PersonOutlineIcon fontSize="large" className="header__icon" />
        </IconButton>

        <IconButton>
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt="tinder logo"
            className="header__logo"
          />
        </IconButton>

        <IconButton>
          <ChatIcon fontSize="large" className="header__icon" />
        </IconButton>
      </div>
    );
}

export default Header
