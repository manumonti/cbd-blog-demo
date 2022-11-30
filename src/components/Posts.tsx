import React from "react";
import Post from "./Post";

function Posts() {
  const blogPosts = [{}];

  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;
