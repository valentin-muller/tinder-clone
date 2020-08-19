import React from 'react';
import "./Header.css";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ChatIcon from "@material-ui/icons/Chat";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Header() {
    return (

      
      <div className="header">
        <IconButton>
          <PersonOutlineIcon fontSize="large" className="header__icon" />
        </IconButton>



      <Link to="/">
        <IconButton>
          <img
            src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
            alt="tinder logo"
            className="header__logo"
          />
        </IconButton>
      </Link>


      <Link to="/chats">
          <IconButton>
               <ChatIcon fontSize="large" className="header__icon" />
          </IconButton>
      </Link>

      </div>
    );
}

export default Header
