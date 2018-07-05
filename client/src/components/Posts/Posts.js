import React, { Component } from "react";
import propTypes from "prop-types";
import Spinner from "../common/Spinner";
import { connect } from "react-redux";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed";
import { getPosts } from "../../actions/postActions";

import "./Posts.css";

class Posts extends Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div>
        <h2>Conversations with fellow devs</h2>
        <PostForm />
        {postContent}
      </div>
    );
  }
}

Posts.propTypes = {
  post: propTypes.object.isRequired,
  getPosts: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
