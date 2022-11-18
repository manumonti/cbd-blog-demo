import React from "react"
import "./Post.css"

function Post({ post }: any) {
  function colorTier(color: string) {
    let backgroundColor = color
    if (color === "bronze") {
      backgroundColor = "peru"
    }

    const style = {
      backgroundColor: backgroundColor,
      textAlign: "center",
      color: "white",
    } as React.CSSProperties

    return <i style={style}>{color}</i>
  }

  return (
    <div className="post-container">
      {colorTier(post.tier)}
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
