import React from 'react'
import './Chats.css';
import Chat from './Chat.js'
function Chats() {
    return (
      <div className="chats">
        <Chat
          name="Ellen"
          message="Are you still up for tonight?"
          timestamp="40 seconds ago"
          profilePic="https://cdn.ebaumsworld.com/mediaFiles/picture/2213344/85502390.jpg"
        />
      </div>
    );
}

export default Chats;
