import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ViewJobs from "./pages/ViewJobs/ViewJobs";
import ViewJobsDetail from "./pages/ViewJobs/ViewJobsDetail/ViewJobsDetail";
import PostJobs from "./pages/PostJobs/PostJobs";
import PostJobsDetail from "./pages/PostJobs/PostJobsDetail/PostJobsDetail";
import Messaging from "./pages/Messaging/Messaging";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {/* view jobs */}
        <Redirect from="/view-jobs" to="/" />
        <Route path="/" exact component={ViewJobs} />
        <Route
          path="/view-jobs/:detailId"
          render={(renderProps) => <ViewJobsDetail {...renderProps} />}
        />
        {/* post jobs/project */}
        <Route path="/post-jobs" component={PostJobs} />
        <Route
          path="/post-jobs/:detailId"
          render={(renderProps) => <PostJobsDetail {...renderProps} />}
        />
        {/* messaging */}
        {/* may need a dynamic route for specific user id? */}
        <Route path="/messaging" component={Messaging} />
        {/* register */}
        <Route path="/register" component={Register} />
        {/* login */}
        <Route path="/login" component={Login} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
