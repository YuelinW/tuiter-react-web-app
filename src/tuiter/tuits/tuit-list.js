import React from "react";
import TuitItem from "./tuit-Item.js";
import {useSelector} from "react-redux";
import tuitsArray from "../data/tuits.json"
import TuitStats from "./tuit-stats";
import PostSummaryItem from "../post-summary-list/post-summary-item";

const TuitList = () => {
  const tuitsArray = useSelector(
      (state) => state.tuits);
  return (
      <ul className="list-group">
        {
          tuitsArray.map(tuits =>
              <TuitItem
                  key={tuits._id} tuits={tuits}/> )
        }
      </ul>
  );
};
export default TuitList;