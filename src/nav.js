import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from "react-router-dom";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function Nav() {
  return (
      <div>
        <Link to="/">Labs</Link> |
        <Link to="/hello">Hello</Link> |
        <Link to="/tuiter">Tuiter</Link>
      </div>
  )
}

export default Nav;