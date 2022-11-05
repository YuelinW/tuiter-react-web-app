import React from "react";
import TuitList from "../tuits/tuit-list.js";
import WhatsHappening from "./whats-happening.js";

const HomeComponent = () => {
  return (
      <ul>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitList/>
      </ul>
  );
};
export default HomeComponent;