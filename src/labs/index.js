import React from 'react';
import ReactDOM from 'react-dom/client';
import Assignment6 from "./a6";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Nav from "../nav.js";

function Labs() {
  return(
      <div>
        <Nav/>
        <Assignment6/>
      </div>
  );
}
export default Labs;