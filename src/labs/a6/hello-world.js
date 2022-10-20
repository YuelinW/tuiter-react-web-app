import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";
import Nav from "../../nav.js";

function HelloWorld() {
  return(
      <div>
        <Nav/>
        <h1>Hello World!</h1>
      </div>
  );
};
export default HelloWorld;