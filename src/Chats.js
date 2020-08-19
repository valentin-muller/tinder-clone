import React from 'react'
import './Chats.css';
import Chat from './Chat.js'
function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="Yo What up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Mark"
                message="Yo What up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Mark"
                message="Yo What up!"
                timestamp="40 seconds ago"
                profilePic="..."
            />
        </div>
    )
}

export default Chats;
