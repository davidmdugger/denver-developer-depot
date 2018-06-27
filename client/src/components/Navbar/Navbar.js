import React, { Component } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import "./Navbar.css";
import logo from "../../img/logo.png";

class Navbar extends Component {
  logoutUserHandler = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const guestLinks = (
      <React.Fragment>
        <Link to="/register">
          <li>Signup</li>
        </Link>
        <Link to="/login">
          <li>Login</li>
        </Link>
      </React.Fragment>
    );

    const authLinks = (
      <React.Fragment>
        <a onClick={this.logoutUserHandler}>
          <li className="user-nav">
            <img
              src={user.avatar}
              alt={user.name}
              title="You must have a gravatar connected via your email to display image"
            />{" "}
            Logout
          </li>
        </a>
      </React.Fragment>
    );

    return (
      <header>
        <Link to="/">
          <img id="logo" src={logo} alt="Logo" />
        </Link>
        <nav>
          <ul id="nav-container">
            <Link to="/profiles">
              <li>Developers</li>
            </Link>
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
        </nav>
      </header>
    );
  }
}

Navbar.propTypes = {
  logoutUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
