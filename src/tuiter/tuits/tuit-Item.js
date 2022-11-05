import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (  {
  tuits = {
    "_id": 123, "topic": "Tesla", "userName": "Tesla",
    "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    "time": "4d",   "image": "../images/tesla.jpg",
    "liked": false,
    "replies": 234,
    "retuits": 543,
    "likes": 3456,
    "handle": "@tesla",
    "content": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
  }
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img width={70} height={70} className="rounded-circle float-start" src={tuits.image} alt="headshot"/>
          </div>
          <div className="col-10">
            <div>
              <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuits._id)}/>
              <p>{tuits.userName} <i className="bi bi-patch-check-fill" style={{color:'dodgerblue'}}/> <span style={{color:'gray'}}>{tuits.handle} .{tuits.time}</span> <i className="bi bi-three-dots float-end"/> </p>
            </div>
            <div>
              {tuits.content}
            </div>
            <TuitStats key={tuits._id} tuits={tuits}/>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;