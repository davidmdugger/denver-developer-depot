import React, { Component } from "react";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import store from "./store";

import "./App.css";

import Layout from "./components/Layout/Layout";

const token = localStorage.jwtToken;
if (token) {
  // set auth token header
  setAuthToken(token);
  // decode token and get user info
  const decodedUser = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decodedUser));
  // check for expired token
  const currentTime = Date.now() / 1000;
  if (decodedUser.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());
    // clear current profile
    store.dispatch(clearCurrentProfile());
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
