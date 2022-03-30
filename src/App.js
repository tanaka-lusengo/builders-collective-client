import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ViewJobs from "./pages/ViewJobs/ViewJobs";
import CommunityFeed from "./pages/CommunityFeed/CommunityFeed";
import MyNetwork from "./pages/MyNetwork/MyNetwork";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
// import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* view jobs */}
        <Redirect from="/view-jobs" to="/" />
        <Route path="/" exact component={ViewJobs} />
        {/* post community feed */}
        <Route path="/community-feed" component={CommunityFeed} />
        {/* messaging */}
        {/* may need a dynamic route for specific user id? */}
        <Route path="/my-network" component={MyNetwork} />
        {/* register */}
        <Route path="/register" component={Register} />
        {/* login */}
        <Route path="/login" component={Login} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
