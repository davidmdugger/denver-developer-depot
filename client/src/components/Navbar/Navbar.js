import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../img/logo.png";

const Navbar = () => {
  return (
    <header>
      <img id="logo" src={logo} alt="Logo" />
      <nav>
        <ul id="nav-container">
          <Link to="/profiles">
            <li>Developers</li>
          </Link>
          <Link to="/register">
            <li>Signup</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
