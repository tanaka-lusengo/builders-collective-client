import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ViewJobs from "./pages/ViewJobs/ViewJobs";
import CommunityFeed from "./pages/CommunityFeed/CommunityFeed";
import MyNetwork from "./pages/MyNetwork/MyNetwork";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Redirect from="/view-jobs" to="/" />
        <Route path="/" exact component={ViewJobs} />
        <Route path="/community-feed" component={CommunityFeed} />
        <Route path="/my-network" component={MyNetwork} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
