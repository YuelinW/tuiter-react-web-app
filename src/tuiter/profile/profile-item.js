import React from "react";
import "./index.css";
import '../../vendors/fontawesome/css/all.css';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useSelector} from "react-redux";
const ProfileItem = () => {
  const profile = useSelector(state => state.profile);
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return(
      <>
        <div className="row">
            <div className="col-2">
              <img height={48} src={profile.profilePicture} alt="arrow"/>
            </div>
            <div className="col-10">
              <div className="fw-bold" style={{fontSize: 20}}>{profile.firstName} {profile.lastName}</div>
              <div><p style={{color:'gray', fontSize: 13}}>6,114 Tweets</p></div>
            </div>
        </div>
        <div className="position-relative">
          <div className="position-absolute">
          <img src={profile.bannerPicture} height={300} width="640" alt="profile-banner"/>
          </div>
          <img  className="position-absolute headshot-relative-pos rounded-circle " width={150} src="../../images/Java.jpg" alt="headshot"/>
          <Link to="/tuiter/edit-profile" className="position-absolute btn btn-outline-dark rounded-pill button-relative-pos fw-bold">Edit profile</Link>


        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="ms-4 fw-bold" style={{fontSize: 20}}>{profile.firstName} {profile.lastName}</div>
        <div className="ms-4" style={{color:'gray', fontSize: 16}}>{profile.handle}</div>
        <br/>
        <div className="ms-4 me-3">{profile.bio}</div>
        <div className="row mt-3 ms-4 me-5" style={{color:'gray'}}>
          <div className="col-4">
            <i className="fas fa-location-dot" /> {profile.location}
          </div>
          <div className="col-4">
            <i className="bi bi-balloon" /> {profile.dateOfBirth}
          </div>
          <div className="col-4">
            <i className="fas fa-calendar"/> {profile.dateJoined}
          </div>
        </div>
        <div className="row mt-2 ms-3">
          <div className="col-3">
            <p className="fw-bold">{profile.followingCount}<span className="fw-light" style={{color:'gray'}}> Following</span></p>
          </div>
          <div className="col-3">
            <p className="fw-bold">{profile.followersCount}<span className="fw-light" style={{color:'gray'}}> Followers</span></p>
          </div>
        </div>
      </>




  );
};
export default ProfileItem;