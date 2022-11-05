import React from "react";
import {Routes, Route} from "react-router";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js";
import HomeComponent from "./home/index.js";
import ProfileComponent from "./profile/index.js";
import whoReducer from "./reducers/who-reducer.js";
import tuitsReducer from "./reducers/tuits-reducer.js";
import profileReducer from "./reducers/profile-reducer.js";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import EditProfile from "./edit-profile";
import ProfileItem from "./profile/profile-item.js";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}});

function Tuiter() {
  return(
      <Provider store={store}>
        <div className="row mt-2">
          <div className="col-2 col-md-2 col-lg-1 col-xl-2">
            <NavigationSidebar active="explore"/>
          </div>
          <div className="col-10 col-md-10 col-lg-7 col-xl-6"
               style={{"position": "relative"}}>
            <Routes>
              <Route path="home"    element={<HomeComponent/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
              <Route path="profile" element={<ProfileItem/>}/>
              <Route path="edit-profile" element={<EditProfile/>}/>
            </Routes>
          </div>
          <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            <WhoToFollowList/>
          </div>
        </div>
      </Provider>
  );
}
export default Tuiter