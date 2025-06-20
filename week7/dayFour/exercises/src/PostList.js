import React from "react";
import data from "./posts.json";

function PostList() {
  return (
    <div>
      {data.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default PostList;