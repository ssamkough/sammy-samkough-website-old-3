import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
  return (
    <div className="post-list section">
      {posts &&
        posts.map(post => {
          return <PostItem post={post} key={post.path} />;
        })}
    </div>
  );
};

export default PostList;
