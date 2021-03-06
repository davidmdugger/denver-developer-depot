import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deletePost, addLike, removeLike } from "../../actions/postActions";

class PostItem extends Component {
  state = {
    like: false
  };
  onDeleteClick = id => {
    this.props.deletePost(id);
  };

  onLikeClick = id => {
    this.props.addLike(id);
    this.setState({ like: !this.state.like });
  };

  onUnlikeClick = id => {
    this.props.removeLike(id);
    this.setState({ like: false });
  };

  render() {
    const { post, auth, showActions } = this.props;

    // add/remove button style if user liked comment
    let likeStyle;
    const postLikes = post.likes.map(like => like.user);
    const likesLength = postLikes.length;
    // if user id is not in postLikes set style to nothing
    if (postLikes.indexOf(auth.user.id) === -1) {
      likeStyle = "";
    } else {
      // otherwise add like className
      likeStyle = "like ";
    }

    return (
      <div className="post-item">
        <div className="user">
          <img src="http://via.placeholder.com/100x100" alt="user" />
          <p>{post.name}</p>
        </div>
        <div className="comment">
          <p>{post.text}</p>
          {showActions ? (
            <div className="rate">
              <button
                className={likeStyle}
                onClick={() => this.onLikeClick(post._id)}
              >
                <i className="fa fa-thumbs-up " />
                <span>{likesLength}</span>
              </button>
              <button onClick={() => this.onUnlikeClick(post._id)}>
                <i className="fa fa-thumbs-down" />
              </button>
              <Link to={`/post/${post._id}`}>
                <button>Comments</button>
              </Link>
              <button
                onClick={() => this.onDeleteClick(post._id)}
                type="button"
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: propTypes.object.isRequired,
  auth: propTypes.object.isRequired,
  deletePost: propTypes.func.isRequired,
  addLike: propTypes.func.isRequired,
  removeLike: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost, addLike, removeLike }
)(PostItem);
