import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import { addPost } from "../../actions/postActions";

class PostForm extends Component {
  state = {
    text: "",
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { user } = this.props.auth;

    const newPost = {
      text: this.state.text,
      name: user.name,
      avatar: user.avatar
    };

    this.props.addPost(newPost);
    this.setState({ text: "" });
  };

  render() {
    const { errors } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextAreaFieldGroup
          placeholder="Create a post"
          name="text"
          value={this.state.text}
          onChange={this.onChange}
          error={errors.text}
        />
        <input type="submit" className="button" value="Add Post" />
      </form>
    );
  }
}

PostForm.propTypes = {
  addPost: propTypes.func.isRequired,
  auth: propTypes.object.isRequired,
  errors: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  errors: state.errors,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addPost }
)(PostForm);
