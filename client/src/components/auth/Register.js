import React, { Component } from "react";
import propTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import TextFieldGroup from "../common/TextFieldGroup";

import "./Form.css";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

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

        <TextFieldGroup
          placeholder="John Doe"
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.onChange}
          error={errors.name}
        />

        <TextFieldGroup
          placeholder="your@email.com"
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onChange}
          error={errors.email}
        />

        <TextFieldGroup
          placeholder="password"
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          error={errors.password}
        />

        <TextFieldGroup
          placeholder="confirm password"
          name="password2"
          type="password"
          value={this.state.password2}
          onChange={this.onChange}
          error={errors.password2}
        />

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
