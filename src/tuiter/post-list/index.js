import React from "react";
import PostItem from "./post-item.js";
import postArray from "./posts.json";

const PostList = () => {
  return (
      <ul className="list-group">
        {
          postArray.map(post =>
              <PostItem
                  key={post._id} post={post}/> )
        }
      </ul>
  );
};
export default PostList;