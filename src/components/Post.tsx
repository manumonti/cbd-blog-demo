import React from "react"
import "./Post.css"

function Post({ post }: any) {
  return (
    <div className="post-container">
      <h2 className="heading">{post.title}</h2>
      <img className="image" src={post.imgUrl} alt="post" />
      <p>{post.body}</p>
      <div className="info">
        <h4>Written by: {post.author}</h4>
      </div>
    </div>
  )
}

export default Post
