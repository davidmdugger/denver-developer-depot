import React from "react";
import PostItem from "./PostItem";

const PostFeed = props => {
  const { posts } = props;
  const renderPosts = posts.map(post => (
    <PostItem key={post._id} post={post} />
  ));
  return <div className="post-feed">{renderPosts}</div>;
};

export default PostFeed;
