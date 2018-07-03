import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostItem extends Component {
  onDeleteClick = id => {
    console.log(id);
  };

  render() {
    const { post, auth } = this.props;
    console.log(post);
    const postLikes = post.likes.length;
    const deleteButton =
      post.user === auth.user.id ? (
        <button onClick={() => this.onDeleteClick(post._id)} type="button">
          Delete
        </button>
      ) : null;
    console.log(post.user);
    console.log(auth.user.id);

    return (
      <div className="post-item">
        <div className="user">
          <img src={post.avatar} alt="user" />
          <p>{post.name}</p>
        </div>
        <div className="comment">
          <p>{post.text}</p>
          <div className="rate">
            <button>
              <i className="fa fa-thumbs-up" />
              <span>{postLikes}</span>
            </button>
            <button>
              <i className="fa fa-thumbs-down" />
            </button>
            <Link to={`/post/${post._id}`}>
              <button>Comments</button>
            </Link>
            {deleteButton}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: propTypes.object.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PostItem);
