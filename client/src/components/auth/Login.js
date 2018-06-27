import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import "./Form.css";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }

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

    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-title">
          <h1>Login</h1>
          <h4>Sign into your account</h4>
        </div>
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

        <input
          className={errors.email ? "invalid" : null}
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        {errors.email && (
          <div>
            <small className="invalid-desc">{errors.email}</small>
          </div>
        )}

        <input type="submit" className="btn" value="Sign In" />
      </form>
    );
  }
}

Login.propTypes = {
  loginUser: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
