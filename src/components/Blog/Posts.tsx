import React from "react";
import Post from "./Post";

function Posts({ decryptedMessages }: any) {
  let blogPosts = [{}];
  if (decryptedMessages.length === 0) {
    return null;
  } else {
    blogPosts = JSON.parse(decryptedMessages);
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
