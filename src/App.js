import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockDetail from "./StockDetail";
import MainContent from "./MainContent";
import Header from "./Header";

function App() {
  // User input control & keydown
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
    <Router>
      <div className="app">
        <Header />

        <Switch>
          {/* Route - Home */}
          <Route exact path="/">
            <MainContent
              userInput={userInput}
              inputHandler={inputHandler}
              handleSubmit={handleSubmit}
              // keypressHandler={keypressHandler}
            />
          </Route>
          {/* Route - Stock details page */}
          <Route exact path="/stockdetail">
            <StockDetail userInput={inputStorage} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
