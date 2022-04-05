import React from "react";
import "./MyNetwork.scss";
import { useState } from "react";
import MyNetworkChat from "../../components/MyNetworkChat/MyNetworkChat";
import { ButtonMessaging } from "../../components/Button/Button";
import { SOCKET_SERVER } from "../../api/endpoints";
import io from "socket.io-client";
const socket = io.connect(SOCKET_SERVER);

export default function MyNetwork() {
  // set state to get user info checking which rooms they enter
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  // socket connection function
  const joinRoom = () => {
    if (username && room) {
      setShowChat(true);
      socket.emit("join_room", room);
    }
  };

  return (
    <>
      {!showChat ? (
        <section className="my-network">
          <div className="my-network__layer">
            <main className="my-network__content">
              <header className="my-network__header">
                <h1 className="fmy-network__title">Networking Chatrooms</h1>
              </header>
              <div className="my-network__form-container">
                <label className="my-network__form-label" htmlFor="username">
                  Username
                </label>
                <input
                  className="my-network__form-input"
                  type="text"
                  name="username"
                  placeholder="Enter Username..."
                  autoComplete="off"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="my-network__form-container">
                <label className="my-network__form-label" htmlFor="room">
                  Room
                </label>
                <select
                  className="my-network__form-input"
                  name="room"
                  required
                  onChange={(e) => setRoom(e.target.value)}
                >
                  <option value="">Please Enter Room:</option>
                  <option value="Architect">Architect's Lounge</option>
                  <option value="Site Manager">
                    Construction/ Project Manager's Lounge
                  </option>
                  <option value="Quantity Surveyor">
                    Commercial Management's Lounge
                  </option>
                  <option value="Skilled Trades">
                    Skilled Trades's Lounge
                  </option>
                </select>
              </div>
              <ButtonMessaging buttonName="Join Lounge" joinRoom={joinRoom} />
            </main>
          </div>
        </section>
      ) : (
        <MyNetworkChat
          socket={socket}
          username={username}
          room={room}
          setShowChat={setShowChat}
        />
      )}
    </>
  );
}
