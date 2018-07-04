import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import Spinner from "../common/Spinner";
import { getPost } from "../../actions/postActions";
import isEmpty from "../../validation/is-empty";

import PostItem from "../Posts/PostItem";
import CommentForm from "./CommentForm";
import CommentFeed from "./CommentFeed";

import "./Post.css";

class Post extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  render() {
    const { post, loading } = this.props.post;
    let postContent;

    if (isEmpty(post)) {
      postContent = <Spinner />;
    } else {
      postContent = (
        <React.Fragment>
          <PostItem post={post} showActions={false} />

          <CommentForm postId={post._id} />
          <CommentFeed postId={post._id} comments={post.comments} />
        </React.Fragment>
      );
    }
    return <div className="single-post">{postContent}</div>;
  }
}

Post.propTypes = {
  getPost: propTypes.func.isRequired,
  post: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
