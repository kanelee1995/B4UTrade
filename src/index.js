import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";

// import Routes from "./Routes";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter base="/">
      <App />
    </HashRouter >
  </React.StrictMode>,
  document.getElementById("root")
);
