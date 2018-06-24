import React, { Component } from "react";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {}
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    console.log(user);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-title">
          <h1>Login</h1>
          <h4>Sign into your account</h4>
        </div>
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          value={this.state.email}
          onChange={this.onChange}
        />

        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.onChange}
        />
        <input type="submit" className="btn" value="Sign In" />
      </form>
    );
  }
}

export default Login;
