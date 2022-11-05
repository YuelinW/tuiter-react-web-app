import React from "react";
import ProfileItem from "./profile-item.js";
import {useSelector} from "react-redux";

const ProfileList = () => {
  // const profileArray = useSelector(
  //     (state) => state.profile);
  return(
      <ul className="list-group">
        {/*{*/}
        {/*  profileArray.map(profile =>*/}
        {/*      <ProfileItem*/}
        {/*          key={profile._id}*/}
        {/*          profile={profile}/>*/}
        {/*  )*/}
        {/*}*/}
        <ProfileItem/>
      </ul>
  );
};

export default ProfileList;