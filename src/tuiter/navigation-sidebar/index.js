import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import '@fortawesome/fontawesome-free/css/all.min.css'

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <>
        <div className="list-group">
          <Link to="#" className="list-group-item">
            <i className="fa-brands fa-twitter"></i>
            Tuiter
          </Link>
          <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
            <i className="fa-solid fa-house"></i>
            Home
          </Link>
          <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
            <i className="fa-solid fa-hashtag"></i>
            Explore
          </Link>
          <Link to="/" className="list-group-item" style={{color:'gray'}}>
            Labs
          </Link>
          <Link to="/" className={`list-group-item ${active === 'notifications'?'active':''}`}>
            <i className="fa-solid fa-bell"></i>
            Notifications
          </Link>
          <Link to="/" className={`list-group-item ${active === 'message'?'active':''}`}>
            <i className="bi bi-envelope-fill"></i>
            Messages
          </Link>
          <Link tof="/" className={`list-group-item ${active === 'Bookmarks'?'active':''}`}>
            <i className="bi bi-bookmark-fill"></i>
            Bookmarks
          </Link>
          <Link to="/" className={`list-group-item ${active === 'lists'?'active':''}`}>
            <i className="bi bi-list-ul"></i>
            Lists
          </Link>
          <Link to="/tuiter/profile" className={`list-group-item ${active === 'profile'?'active':''} ${active === 'edit-profile'?'active':''}`}>
            <i className="bi bi-person-fill"></i>
            Profile
          </Link>
          <Link to="/" className={`list-group-item ${active === 'more'?'active':''}`}>
            <i className="bi bi-circle-fill"></i>
            More
          </Link>
        </div>
        <div className="d-grid mt-2">
          <a href="tweet.html"
             className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
      </>
  );
};
export default NavigationSidebar;