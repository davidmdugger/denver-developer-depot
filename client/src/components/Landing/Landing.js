import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

export default () => {
  return (
    <div id="landing">
      <div id="landing-content">
        <h1>Denver Developer Depot</h1>
        <h5>Where Denver's Developers share their tech secrets</h5>
        <div className="btn-container">
          <Link to="/profiles">
            <button className="btn main">Profiles</button>
          </Link>
          <Link to="/login">
            <button className="btn main">Login</button>
          </Link>
          <Link to="/register">
            <button className="btn main">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
