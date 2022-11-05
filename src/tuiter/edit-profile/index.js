import React, {useState} from "react";
import {updateProfile} from "../reducers/profile-reducer";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router";
import {Link} from "react-router-dom";

const Index = () => {

  const initialProfile = useSelector(state => state.profile)
  const [profile, setProfile] = useState(initialProfile)
  const dispatch = useDispatch();
  const updateProfileHandler = (event) => {
    dispatch(updateProfile({
      ...profile,
      firstName: profile.firstName,
      lastName:profile.lastName,
      bio: profile.bio,
      location: profile.location,
      website: profile.website,
      dateOfBirth: profile.dateOfBirth}));

  }
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../profile`;
    navigate(path);
  }
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  // const initialProfile = useSelector()
  // const [profile, setProfile] = useState(initialProfile)
  // const [firstName, setFirstName] = useState(profile.firstName)
  // const [lastName, setLastName] = useState(profile.lastName)
  // const [bio, setBio] = useState(profile.bio)
  // const [location, setLocation] = useState(profile.location)
  // const [website, setwebsite] = useState(profile.firstName)
  // const [birthDate, setwebsite] = useState(profile.firstName)
  // const setFirstName = (e) => {
  //   const newFirstName = e.target.value;
  //   const newProfile = {
  //     firstName: newFirstName,
  //     lastName: profile.lastName,
  //     bio: profile.bio,
  //     location: profile.location,
  //     birthDate: profile.birthDate
  //   }
  //   setProfile(newProfile)
  // }
  // const setLastName = (e) => {
  //   const newLastName = e.target.value;
  //   const newProfile = {
  //     ...profile,
  //     lastName: newLastName
  //   };
  //   setProfile(newProfile)
  // }

  // const [profileBeingEdited, setProfileBeingEdited] = useState()
  // const [profileEditingString, setProfileEditingString] = useState('')
  // const [profileString, setProfileString] = useState('')
  // const profiles = useSelector(state => state.profile)
  // const dispatch = useDispatch();
  // const saveEditingProfile = (event) => {
  //   dispatch(updateProfile({
  //     ...profile,
  //     firstName: firstName,
  //
  //   }))
  // }
  return(
      <>
        <div className="row">
          <div className="col-1 mt-2">
            <i className="bi bi-x-lg" onClick={() => routeChange()}/>
          </div>
          <div className="col-4 mt-2 fw-bold">
            Edit Profile
          </div>
          <div className="col-7">
            <Link to="/tuiter/profile" className="btn btn-dark rounded-pill float-end mb-2"
                    onClick={(event) => updateProfileHandler(event)}
                    > Save </Link>
          </div>
        </div>
        <div className="position-relative">
          <div className="position-absolute">
            <img src="../../images/Starship.jpg" height={300} width="640" alt="profile-banner"/>
          </div>
          <img  className="position-absolute headshot-relative-pos rounded-circle " width={150} src="../../images/Java.jpg" alt="headshot"/>

        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <form id="textarea">
          <label>First Name:</label><br/>
          <input className="col-12"
              onChange={(e) => setProfile({...profile, firstName: e.target.value})}
              value={profile.firstName}/>
        </form>
        <form id="textarea">
          <label>Last Name:</label><br/>
          <input className="col-12"
              onChange={(e) => setProfile({...profile, lastName: e.target.value})}
              value={profile.lastName}/>
        </form>
        <form id="textarea">
          <label>Bio:</label><br/>
          <textarea className="col-12"
              rows="3"
              onChange={(e) => setProfile({...profile, bio: e.target.value})}
              value={profile.bio}/>
        </form>
        <form id="textarea">
          <label>Location:</label><br/>
          <input className="col-12"
              onChange={(e) => setProfile({...profile, location: e.target.value})}
              value={profile.location}/>
        </form>
        <form id="textarea">
          <label>Website:</label><br/>
          <input className="col-12"
              onChange={(e) => setProfile({...profile, website: e.target.value})}
              value={profile.website}/>
        </form>
        <form id="textarea">
          <label>Birth Date:</label><br/>
          <input className="col-12"
              onChange={(e) => setProfile({...profile, dateOfBirth: e.target.value})}
              value={profile.dateOfBirth}/>
        </form>
      </>

  );
};
export default Index;