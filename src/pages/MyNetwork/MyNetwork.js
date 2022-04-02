import React from "react";
import "./MyNetwork.scss";
import { Link, useRouteMatch } from "react-router-dom";
import io from "socket.io-client";
import { useState } from "react";
import MyNetworkChat from "../../components/MyNetworkChat/MyNetworkChat";

const socket = io.connect("http://localhost:3001");

export default function MyNetwork() {
  // set state to get user info checking which rooms they enter
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  // function to get events for state
  // const handleRoomChoice = (e) => {
  //   e.preventDefault();
  //   let form = e.target;
  //   const usernameVal = form.username.value;
  //   const roomVal = form.room.value;
  //   setUsername(usernameVal);
  //   setRoom(roomVal);
  // };

  // socket connection function
  const joinRoom = () => {
    if (username && room) {
      setShowChat(true);
      socket.emit("join_room", room);
    }
  };

  let { url } = useRouteMatch();
  return (
    <>
      {!showChat ? (
        <section className="join-container">
          <header className="join-header">
            <h1 className="fas fa-smile">My Network Chat</h1>
          </header>
          <main className="join-main">
            {/* <form onSubmit={handleRoomChoice}> */}
            <div className="form-control">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter username..."
                autoComplete="off"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label htmlFor="room">Room</label>
              <select
                name="room"
                required
                onChange={(e) => setRoom(e.target.value)}
              >
                <option value="">Please Enter Room:</option>
                <option value="Architect">Architect</option>
                <option value="Site Manager">Construction/ Site Manager</option>
                <option value="Quantity Surveyor">Quantity Surveyor</option>
              </select>
            </div>
            {/* <Link
            to={{
              pathname: `${url}/chat`,
              state: {
                username: username,
                room,
                room,
              },
              data: socket,
            }}
            to={`${url}/chat`}
          > */}
            <button className="btn" onClick={joinRoom}>
              Join Chat
            </button>
            {/* </Link> */}
            {/* </form> */}
          </main>
        </section>
      ) : (
        <MyNetworkChat socket={socket} username={username} room={room} />
      )}
    </>
  );
}

{
  /* <section class="my-network">
<header class="my-network__header">
  <h1 class="my-network__header-title">My Network Chat</h1>
</header>
<main class="my-network__join-main">
  <form action="chat.html">
    <div class="my-network__form-control">
      <label class="my-network__form-label" for="username">
        Enter Username
      </label>
      <input
        class="my-network__form-input"
        type="text"
        name="username"
        placeholder="Enter username..."
        required
      />
    </div>
    <div class="my-network__form-control">
      <label class="my-network__form-label" for="room">
        Room
      </label>
      <select class="my-network__form-input" name="room" id="room">
        <option value="Architect">Architects</option>
        <option value="Site Manager">Construction/ Site Managers</option>
        <option value="Quantity Surveyor">Quantity Surveyors</option>
        <option value="M&E">M&E</option>
      </select>
    </div>
    <button type="submit" class="btn">
      Join Chat
    </button>
  </form>
</main>
</section> */
}
