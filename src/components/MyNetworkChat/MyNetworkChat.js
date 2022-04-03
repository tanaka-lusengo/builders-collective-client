import React from "react";
import { useState } from "react";
import "./MyNetworkChat.scss";
import {
  TimestampChat,
  handlePageScrollBottom,
  handlePageScroll,
} from "../../utilities/helper";
import { useEffect } from "react";
import { v4 as uuid4 } from "uuid";
import SendIcon from "@mui/icons-material/Send";
import CloseIcon from "@mui/icons-material/Close";
import GroupIcon from "@mui/icons-material/Group";
import ScrollToBottom from "react-scroll-to-bottom";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

socket.on("message", (message) => {
  // console.log(message);
});

export default function MyNetworkChat({ socket, username, room, setShowChat }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageFeed, setMessageFeed] = useState([]);

  //send message function
  const sendMessage = async () => {
    if (currentMessage) {
      const messageData = {
        room: room,
        author: username,
        content: currentMessage,
        time: TimestampChat(Date.now()),
      };
      try {
        await socket.emit("send_message", messageData);
        setMessageFeed((prevMessages) => [...prevMessages, messageData]);
        setCurrentMessage("");
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
    <section className="network-chat">
      <div className="network-chat__layer">
        <div className="network-chat__layer-content">
          <header className="network-chat__header">
            <h1 className="network-chat__title">Chat Stream</h1>
            <div className="network-chat__close-container">
              <CloseIcon />
              <p
                className="network-chat__leave"
                onClick={() => setShowChat(false)}
              >
                Leave Room
              </p>
            </div>
          </header>
          <main className="network-chat__main">
            <div className="network-chat__sidebar">
              <h3 className="network-chat__comments"></h3>
              <h2 className="network-chat__room-name">Builders' Collective</h2>
              <div className="network-chat__room-title-container">
                <GroupIcon />

                <h3 className="network-chat__users-title">Users</h3>
              </div>
              <ul className="network-chat__users-list">
                <li className="network-chat__users-list-item">Brad</li>
              </ul>
            </div>
            <div className="network-chat__chat-messages-container">
              <ScrollToBottom className="network-chat__messages-container-scroll">
                {messageFeed.map((message) => {
                  return (
                    <>
                      <div
                        className={
                          "network-chat__messages network-chat__messages" +
                          (username === message.author ? "" : "--other")
                        }
                      >
                        <h3 className="network-chat__author">
                          {message.author}:
                        </h3>
                        <p className="network-chat__content">
                          {message.content}
                        </p>
                      </div>
                      <p className="network-chat__time">{message.time}</p>
                    </>
                  );
                })}
              </ScrollToBottom>
            </div>
          </main>
          <div className="network-chat__form-container">
            <input
              className="network-chat__form-input"
              type="text"
              value={currentMessage}
              name="message"
              placeholder="Enter Message"
              required
              autoComplete="off"
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={(e) => {
                e.key === "Enter" && sendMessage();
              }}
            />
            <span className="network-chat__form-send" onClick={sendMessage}>
              <SendIcon />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
