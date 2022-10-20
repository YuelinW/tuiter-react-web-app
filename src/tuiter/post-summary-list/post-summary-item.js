import React from "react";

const PostSummaryItem = (
    {
      post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div><p style={{color:'gray'}}>{post.userName} . {post.time}</p></div>
            <div className="fw-bolder">{post.topic}</div>
            <div><p style={{color:'gray'}}>{post.title}</p></div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="tweeter content"/>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;
