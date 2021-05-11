/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
// import App from "./App";
import Tours from "./tours";
import "./App.css";

const ReactApp = () => {
 return (
  <>
   <div className="container">
    <Tours></Tours>
   </div>
  </>
 );
};

ReactDOM.render(<ReactApp />, document.getElementById("root"));
