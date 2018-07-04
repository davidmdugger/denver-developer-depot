import React from "react";
import CommentItem from "./CommentItem";

const CommentFeed = props => {
  const { comments, postId } = props;

  const commentsDisplay = comments.map(comment => (
    <CommentItem comment={comment} key={comment._id} postId={postId} />
  ));

  return (
    <div className="comments-container">
      <h3 className="comments-feed-title">Comments</h3>
      <div className="comments-display">{commentsDisplay}</div>
    </div>
  );
};

export default CommentFeed;
