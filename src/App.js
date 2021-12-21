import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockDetail from "./StockDetail";
import MainContent from "./MainContent";
import Header from "./Header";

function App() {
  // User input control & keydown
  const [userInput, setuserInput] = useState("");
  const [stockSymbol, setstockSymbol] = useState("AAPL");
  const inputStorage = localStorage.getItem("userInput");

  const inputHandler = (e) => {
    setuserInput(e.target.value);
    localStorage.setItem("userInput", e.target.value);
  };

  const keypressHandler = (e) => {
    if (e.key === "Enter") {
      setstockSymbol(inputStorage);
      document.getElementById("searchButton").click();
    }
  };

  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          {/* Route - Home */}
          <Route exact path="/">
            <MainContent
              userInput={inputStorage}
              inputHandler={inputHandler}
              keypressHandler={keypressHandler}
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
