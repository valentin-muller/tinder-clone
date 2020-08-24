import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://cdn.ebaumsworld.com/mediaFiles/picture/2213344/85502390.jpg",
      message: "What up?",
    },
    {
      message: "Hey, how is it going?",
    },
    {
      name: "Alex",
      image:
        "https://cdn.ebaumsworld.com/mediaFiles/picture/416301/83687757.jpg",
      message: "Are you still up for tonight?",
    },
  ]);

  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELLEN ON 24/08/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

        <form className="chatScreen__input">
          <input
            className="chatScreen__inputField"
            type="text"
            placeholder="Type a message..."
          />
          <button className="chatScreen__inputButton">SEND</button>
        </form>
      </div>

  );
}

export default ChatScreen;
