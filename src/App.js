import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./component/SearchBar";
import IndexBar from "./component/IndexBar";
import StockDetail from "./StockDetail";
import SearchBarButton from "./component/SearchBarButton";

function App() {
  // User input control & keydown
  const [userInput, setuserInput] = useState("");
  const [stockSymbol, setstockSymbol] = useState("AAPL");

  // Data for index bar
  const [mostGainerData, setMostGainerData] = useState([]);

  const inputHandler = (e) => {
    setuserInput(e.target.value);
  };

  const keypressHandler = (e) => {
    if (e.key === "Enter") {
      setstockSymbol(userInput);
      // localStorage.setItem("inputValue", userInput);
      document.getElementById("searchButton").click();
    }
  };

  // Data fetching for main page index bar
  useEffect(() => {
    axios
      .get(
        "https://financialmodelingprep.com/api/v3/gainers?apikey=d7f8484c1c8ac4235b39e22345b8dbbd"
      )
      .then((response) => {
        setMostGainerData(response["data"]);
      });
  }, []);

  return (
    <Router>
      <div className="app">
        {/* Navbar */}
        <div className="header">
          <Link to="/" className="title">
            B4UTrade
          </Link>
          <IndexBar datas={mostGainerData} />
        </div>
        {/* Navbar end */}

        <Switch>
          {/* Main content */}

          {/* Route - Home */}
          <Route exact path="/">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="mainContent"
            >
              <div className="leftContent">
                <h1 className="headline">Beat the market.</h1>
                <h2 className="subheadline">
                  Get the lastest historical & fundamental data of a stock.
                </h2>
                <div className="searchContainer">
                  <FontAwesomeIcon icon={faSearch} className={"searchIcon"} />
                  <SearchBar
                    userInput={userInput}
                    inputHandle={inputHandler}
                    keypressHandle={keypressHandler}
                  />
                </div>
                <SearchBarButton className="invisibleButton" />
              </div>
            </motion.div>
          </Route>

          {/* Route - Stock details page */}
          <Route exact path="/stockdetail">
            <StockDetail userInput={stockSymbol} />
          </Route>
        </Switch>

        {/* Main content end */}
      </div>
    </Router>
  );
}

export default App;
