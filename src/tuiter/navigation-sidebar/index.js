import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  return (
      <>
        <div className="list-group">
          <a href="#" className="list-group-item" style={{color:'gray'}}>
            <i className="bi bi-twitter"></i>
            Tuiter
          </a>
          <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`} style={{color:'gray'}}>
            <i className="bi bi-house-fill"></i>
            Home
          </Link>
          <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`} style={{color:'gray'}}>
            <i className="bi bi-hash"></i>
            Explore
          </Link>
          <Link to="/" className="list-group-item" style={{color:'gray'}}>
            Labs
          </Link>
          <Link to="/" className={`list-group-item ${active === 'notifications'?'active':''}`} style={{color:'gray'}}>
            <i className="bi bi-bell-fill"></i>
            Notifications
          </Link>
          <Link to="/" className={`list-group-item ${active === 'message'?'active':''}`} style={{color:'gray'}}>
            <i className="bi bi-envelope-fill"></i>
            Messages
          </Link>
          <Link tof="/" className={`list-group-item ${active === 'Bookmarks'?'active':''}`} style={{color:'gray'}}>
            <i className="bi bi-bookmark-fill"></i>
            Bookmarks
          </Link>
          <Link to="/" className={`list-group-item ${active === 'lists'?'active':''}`} style={{color:'gray'}}>
            <i className="bi bi-list-ul"></i>
            Lists
          </Link>
          <Link to="/" className={`list-group-item ${active === 'profile'?'active':''}`} style={{color:'gray'}}>
            <i className="bi bi-person-fill"></i>
            Profile
          </Link>
          <Link to="/" className={`list-group-item ${active === 'more'?'active':''}`} style={{color:'gray'}}>
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