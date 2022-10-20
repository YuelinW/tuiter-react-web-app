import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {Link} from "react-router-dom";
import Classes from './classes/index.js';
import Styles from './styles/index.js';
import ConditionalOutput from "./conditional-output/index.js";
import TodoItem from "./todo/todo-item.js";
import TodoList from "./todo/todo-list.js";

function Assignment6() {
  return (
      <div>
        {/*<Link to="/">Lab</Link> |*/}
        {/*<Link to="/hello">Hello</Link> |*/}
        {/*<Link to="/tuiter">Tuiter</Link>*/}
        <h1>Assignment 6</h1>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
      </div>
  );
}
export default Assignment6;