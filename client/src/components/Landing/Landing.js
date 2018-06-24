import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
  return (
    <div id="landing">
      <div id="landing-content">
        <h1>Developer Depot</h1>
        <h5>Where Colorado's developers connect</h5>
        <div className="btn-container">
          <Link to="/profiles">
            <button className="btn main">Developers</button>
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

export default Landing;
