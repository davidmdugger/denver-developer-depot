import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";

import "./Form.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.errors);
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    this.createNewUser();
  };

  createNewUser = () => {
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser, this.props.history); // comes from our mapStateToProps
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-title">
          <h1>Sign Up</h1>
          <h4>Create your account</h4>
        </div>

        <input
          className={errors.name ? "invalid" : null}
          type="text"
          name="name"
          placeholder="John Doe"
          value={this.state.name}
          onChange={this.onChange}
        />
        {errors.name && (
          <div>
            <small className="invalid-desc">{errors.name}</small>
          </div>
        )}

        <input
          className={errors.email ? "invalid" : null}
          type="email"
          name="email"
          placeholder="your@email.com"
          value={this.state.email}
          onChange={this.onChange}
        />
        {errors.email && (
          <div>
            <small className="invalid-desc">{errors.email}</small>
          </div>
        )}

        <small>
          This site uses gravatar. If you want an avatar, use an email with your
          image
        </small>
        <input
          className={errors.password ? "invalid" : null}
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        {errors.password && (
          <div>
            <small className="invalid-desc">{errors.password}</small>
          </div>
        )}

        <input
          className={errors.password2 ? "invalid" : null}
          type="password"
          name="password2"
          placeholder="confirm password"
          value={this.state.password2}
          onChange={this.onChange}
        />
        {errors.password2 && (
          <div>
            <small className="invalid-desc">{errors.password2}</small>
          </div>
        )}

        <input type="submit" className="btn" value="Sign Me Up!" />
      </form>
    );
  }
}

Register.propTypes = {
  registerUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth, // state.auth comes from our rootReducer
  errors: state.errors // state.errors comes from our rootReducer
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));
