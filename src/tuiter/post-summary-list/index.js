import React, {useEffect} from "react";
import PostSummaryItem from "./post-summary-item.js";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk}
  from "../../services/tuits-thunks.js";

const PostSummaryList = () => {
  const {tuits, loading} = useSelector(
      (state) => state.tuitsData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findTuitsThunk())
  },[])
  return (
      <ul className="list-group">
        {
            loading &&
            <li className="list-group-item">
              Loading...
            </li>
        }
        {
          tuits.map(tuit =>
              <PostSummaryItem
                  key={tuit._id} tuit={tuit}/> )
        }
      </ul>
  );
};
export default PostSummaryList;