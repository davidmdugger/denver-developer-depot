import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./Layout.css";

// components
import Landing from "../Landing/Landing";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Dashboard from "../Dashboard/Dashboard";
import CreateProfile from "../CreateProfile/CreateProfile";
import EditProfile from "../EditProfile/EditProfile";
import AddExperience from "../Credentials/AddExperience/AddExperience";
import AddEducation from "../Credentials/AddEducation/AddEducation";
import Profiles from "../Profiles/Profiles";
import Profile from "../Profile/Profile";
import Posts from "../Posts/Posts";
import Post from "../Post/Post";
import NotFound from "../NotFound/NotFound";

import PrivateRoute from "../common/PrivateRoute";

const Layout = props => {
  return (
    <Router>
      <div className="layout">
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
        <Switch>
          <PrivateRoute
            exact
            path="/create-profile"
            component={CreateProfile}
          />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/edit-profile" component={EditProfile} />
        </Switch>

        <Switch>
          <PrivateRoute
            exact
            path="/add-experience"
            component={AddExperience}
          />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/add-education" component={AddEducation} />
        </Switch>
        <Route exact path="/profiles" component={Profiles} />
        <Route exact path="/profile/:handle" component={Profile} />
        <Switch>
          <PrivateRoute exact path="/feed" component={Posts} />
        </Switch>
        <Switch>
          <Route exact path="/post/:id" component={Post} />
        </Switch>
        <Route path="/" component={NotFound} />
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
