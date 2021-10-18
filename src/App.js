import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./component/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import IndexBar from "./component/IndexBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StockDetail from "./StockDetail";
import SearchBarButton from "./component/SearchBarButton";
import { Link } from "react-router-dom";

function App() {
  // User input control & keydown
  const [userInput, setuserInput] = useState("");
  const [stockSymbol, setstockSymbol] = useState("AAPL");

  // Data for chart
  const [stockDateData, setstockDateData] = useState([]);
  const [stockCloseData, setstockCloseData] = useState([]);

  // Data for table
  const [tableData, settableData] = useState([]);
  
  // Data for earnings
  const [earnings, setearnings] = useState([]);
  // const [estimatedEPS, setestimatedEPS] = useState([]);
  // const [surprisePercentage, setsurprisePercentage] = useState([]);
  

  // Data for profile
  const [profileData, setprofileData] = useState([]);

  // Data for index bar
  const [mostGainerData, setMostGainerData] = useState([]);

  const inputHandler = (e) => {
    setuserInput(e.target.value);
  };

  const keypressHandler = (e) => {
    if (e.key === "Enter") {
      setstockSymbol(userInput);
      document.getElementById("searchButton").click();
    }
  };

  // Data fetching for stock profile
  useEffect(() => {
    axios
      .get(
        `https://api.polygon.io/v1/meta/symbols/${stockSymbol}/company?apiKey=REGDCE9oeokuBTeCkEQpYRH81FU_a7if`
      )
      .then((response) => {
        // console.log(response["data"]);
        setprofileData(response["data"]);
      });
  }, [stockSymbol]);

  // Data fetching for stock fundamentals

  useEffect(() => {
    axios
      .get(
        `https://www.alphavantage.co/query?function=EARNINGS&symbol=${stockSymbol}&apikey=QHHEJX1I72MCYTJR`
      )
      .then((response) => {
        let earningsArray = response["data"]["quarterlyEarnings"];
        // setreportedEPS(earningsArray.slice(0,5).map(data => data.reportedEPS))
        setearnings(earningsArray.slice(0,5))
        // setestimatedEPS(earningsArray.slice(0,5).map(data => data.estimatedEPS))
        // setsurprisePercentage(earningsArray.slice(0,5).map(data => data.surprisePercentage))
      });
  }, [stockSymbol]);

  // Data fetching for stock chart and table
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/time_series",
      params: {
        symbol: `${stockSymbol}`,
        interval: "1day",
        outputsize: "7",
        format: "json",
      },
      headers: {
        "x-rapidapi-key": "52979a8a04msha30f088adf5a675p1868e1jsnc49e105d3bfc",
        "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        settableData(response.data["values"]);
        // console.log(response.data["values"]);
        setstockDateData(
          response.data["values"].map((stock) => stock["datetime"])
        );
        setstockCloseData(
          response.data["values"].map((stock) => stock["close"])
        );
      })
      .catch(function (error) {
        // console.error(error);
      });
  }, [stockSymbol]);

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
            TradeAndLog
          </Link>
          <IndexBar datas={mostGainerData} />
        </div>
        {/* Navbar end */}

        <Switch>
          {/* Main content */}

          {/* Route - Home */}
          <Route exact path="/">
            {/* <div className="overlay"> */}
            <div className="mainContent">
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
                {/* <StockTable tableData={tableData} /> */}
              </div>
            </div>
            {/* </div> */}
          </Route>

          {/* Route - Stock details page */}
          <Route exact path="/stockdetail">
            <StockDetail
              stockDate={stockDateData}
              stockClose={stockCloseData}
              tableData={tableData}
              profileData={profileData}
              // reportedEPS={reportedEPS}
              // estimatedEPS={estimatedEPS}
              // surprisePercentage={surprisePercentage}
              earnings={earnings}
            />
          </Route>
        </Switch>

        {/* Main content end */}
      </div>
    </Router>
  );
}

export default App;
