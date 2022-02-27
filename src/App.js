import React, { useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import StockDetail from "./StockDetail";
import MainContent from "./MainContent";
import Header from "./Header";
import './css/normalize.css';
import './css/style.css';

function App() {
  const [userInput, setuserInput] = useState("");
  const inputStorage = localStorage.getItem("userInput");
  const inputHandler = (e) => {
    setuserInput(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("userInput", userInput.toUpperCase());
    document.getElementById("searchButton").click();
    window.location.reload();
  };

  return (
    <HashRouter>
      <div className="app">
        <Header />

        <Switch>
          {/* Route - Home */}
          <Route exact path="/">
            <MainContent
              userInput={userInput}
              inputHandler={inputHandler}
              handleSubmit={handleSubmit}
            />
          </Route>
          {/* Route - Stock details page */}
          <Route exact path="/stockdetail">
            <StockDetail userInput={inputStorage} />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
