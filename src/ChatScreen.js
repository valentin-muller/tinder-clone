import React, { useState } from 'react';
import Avatar from "@material-ui/core/Avatar";
import './ChatScreen.css';

function ChatScreen() {

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'What up?'
        },
        {
            name: 'John',
            image: '...',
            message: 'Hey, how is it going?'
        },
        {
            name: 'Alex',
            image: '...',
            message: 'Are you still up for tonight?'
        },
    ]);

    return (
        <div className="chatScreen">
            {messages.map(message => (
                <div className="chatScreen__message">
                    <Avatar
                        className="chatScreen__image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}

export default ChatScreen
