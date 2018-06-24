import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

import Layout from "./components/Layout/Layout";

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
