import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ViewJobs from "./pages/ViewJobs/ViewJobs";
import CommunityFeed from "./pages/CommunityFeed/CommunityFeed";
import MyNetwork from "./pages/MyNetwork/MyNetwork";
import MyNetworkChat from "./components/MyNetworkChat/MyNetworkChat";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/view-jobs" to="/" />

        <Route path="/" exact component={ViewJobs} />

        <Route path="/community-feed">
          {user ? <CommunityFeed /> : <Redirect to="/register" />}
        </Route>

        <Route path="/my-network" exact>
          {user ? <MyNetwork /> : <Redirect to="/register" />}
        </Route>

        <Route path="/my-network/chat" component={MyNetworkChat} />

        <Route path="/profile/:username">
          {user ? <Profile /> : <Redirect to="/register" />}
        </Route>

        <Route path="/register">
          {user ? <Redirect to="/community-feed" /> : <Register />}
        </Route>

        <Route path="/login">
          {user ? <Redirect to="/community-feed" /> : <Login />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
