import React from "react";
import ReactDOM from "react-dom";
// import List from './List'
// import Suspense from './Suspense'
// import MemoComponent from './MemoComponent'
import App from "./App";

const res = ReactDOM.render(
  <App key="App-class" data={"from App data"} />,
  document.getElementById("root"),
  function () {
    console.log("[render callback]: ", this);
  }
);
