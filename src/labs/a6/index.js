import React from 'react';
import Classes from './classes/index.js';
import Styles from './styles/index.js';
import ConditionalOutput from "./conditional-output/index.js";
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