import React from "react";
import Post from "./Post";

function Posts({ decryptedMessage }: any) {
  let blogPosts = [{}];
  if (!decryptedMessage) {
    return null;
  } else {
    blogPosts = JSON.parse(decryptedMessage);
  }

  return (
    <div className="posts-container">
      {blogPosts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
}

export default Posts;
