import React from "react";

const PostSummaryItem = (
    {
      tuits = {
        "_id": 123, "topic": "Space", "username": "SpaceX",
        "handle": "@spacex", "time": "2h", "image": "RelativitySpace.jpg",
        "title": "SpaceX's Mission",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars",
        "liked": true, "likes": 2345, "dislikes": 5,
        "replies": 123, "retuits": 432
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div><p style={{color:'gray'}}>{tuits.username} . {tuits.time}</p></div>
            <div className="fw-bolder">{tuits.topic}</div>
            <div><p style={{color:'gray'}}>{tuits.title}</p></div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`../../images/${tuits.image}`} alt="tweeter content"/>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;
