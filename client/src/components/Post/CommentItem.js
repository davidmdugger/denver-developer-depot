import React, { Component } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { deleteComment } from "../../actions/postActions";

class CommentItem extends Component {
  onDeleteClick = (postId, commentId) => {
    this.props.deleteComment(postId, commentId);
  };
  render() {
    const { comment, postId, auth } = this.props;

    const deleteButton =
      comment.user === auth.user.id ? (
        <button
          className="btn btn-alert btn-small"
          onClick={() => this.onDeleteClick(postId, comment._id)}
          type="button"
        >
          Delete
        </button>
      ) : null;

    return (
      <div className="comment" key={comment._id}>
        <h3 className="comment-user-name">{comment.name}</h3>
        <p>{comment.text}</p>
        {deleteButton}
      </div>
    );
  }
}

CommentItem.propTypes = {
  deleteComment: propTypes.func.isRequired,
  comment: propTypes.object.isRequired,
  postId: propTypes.string.isRequired,
  auth: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deleteComment }
)(CommentItem);
