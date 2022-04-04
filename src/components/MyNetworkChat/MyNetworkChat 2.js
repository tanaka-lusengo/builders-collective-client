import React from "react";
import { useState } from "react";
import "./MyNetworkChat.scss";
import { Timestamp } from "../../utilities/helper";
import { useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import ScrollToBottom from "react-scroll-to-bottom";

export default function MyNetworkChat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageFeed, setMessageFeed] = useState([]);

  // function to get events for state
  //   const handleCurrentMessage = (e) => {
  //     e.preventDefault();
  //     let form = e.target;
  //     const messageVal = form.message.value;
  //     setCurrentMessage(messageVal);
  //   };

  //send message function
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        content: currentMessage,
        time: Timestamp(Date.now()),
      };
      try {
        await socket.emit("send_message", messageData);
        setMessageFeed((prevMessages) => [...prevMessages, messageData]);
      } catch (err) {
        console.log("sendMessage socket error -->", err);
      }
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      //allows the previouse message/state to be shown allowing chat feed and append new message
      setMessageFeed((prevMessages) => [...prevMessages, data]);
    });
  }, [socket]);

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h1>
          <i className="fas fa-smile"></i> ChatCord
        </h1>
        <a href="index.html" className="btn">
          Leave Room
        </a>
      </header>
      <main className="chat-main">
        {/* <div className="chat-sidebar">
          <h3>
            <i className="fas fa-comments"></i> Room Name:
          </h3>
          <h2 id="room-name">JavaScript</h2>
          <h3>
            <i className="fas fa-users"></i> Users
          </h3>
          <ul id="users">
            <li>Brad</li>
            <li>John</li>
            <li>Mary</li>
            <li>Paul</li>
            <li>Mike</li>
          </ul>
        </div> */}
        <div className="chat-messages">
          <div className="message">
            {messageFeed.map((message) => {
              return (
                <>
                  <p className="meta">
                    {message.author} <span>{message.time}</span>
                  </p>
                  <p className="text" key={uuid4()}>
                    {message.content}
                  </p>
                </>
              );
            })}
          </div>
        </div>
      </main>
      <div className="chat-form-container">
        {/* <form id="chat-form" > */}
        <input
          type="text"
          name="message"
          placeholder="Enter Message"
          required
          autoComplete="off"
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(e) => {
            e.key === "Enter" && sendMessage();
          }}
        />
        <button className="btn" onClick={sendMessage}>
          <i className="fas fa-paper-plane"></i> Send
        </button>
        {/* </form> */}
      </div>
    </div>
  );
}
