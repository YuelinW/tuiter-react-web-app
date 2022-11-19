import React from "react";
import '../../vendors/fontawesome/css/all.css';
import{updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = (
    {
      tuits = {
        "_id": 123, "topic": "Tesla", "userName": "Tesla",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "time": "4d",   "image": "../images/tesla.jpg",
        "liked": false,
        "replies": 234,
        "retuits": 543,
        "likes": 3456,
        "dislikes": 3,
        "handle": "@tesla",
        "content": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
  const dispatch = useDispatch();
  return(
      <div className="row mt-3">
        <div className="col-2">
          <i className="bi bi-chat" /> {tuits.replies}
        </div>
        <div className="col-2">
          <i className="bi bi-share col-3" /> {tuits.retuits}
        </div>
        <div className="col-3">
          {<i onClick={() => dispatch(updateTuitThunk({
            ...tuits,
            likes: tuits.likes + 1
          }))} className="bi bi-heart-fill me-2 text-danger"></i>}
          {tuits.likes}
        </div>
        <div className="col-2">
          <i onClick={() => dispatch(updateTuitThunk({
            ...tuits,
            dislikes: tuits.dislikes + 1
          }))} className="bi bi-hand-thumbs-down-fill me-2 text-danger"></i>
          {tuits.dislikes}
        </div>
        <div className="col-2">
          <i className="bi bi-send col-3" />
        </div>
      </div>
  );
};
export default TuitStats;