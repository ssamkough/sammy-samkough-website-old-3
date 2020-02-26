import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="post-list section">
      {posts &&
        posts.map(post => {
          return <Post post={post} key={post.title} />;
        })}
    </div>
  );
};

export default PostList;
