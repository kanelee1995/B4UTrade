import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarButton from "./component/SearchBarButton";
import SearchBar from "./component/SearchBar";
import StockTable from "./component/StockTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import IndexBar from "./component/IndexBar";

function App() {
  const [userInput, setuserInput] = useState("AAPL");
  const [buttonValue, setbuttonValue] = useState("AAPL");
  const [data, setdata] = useState([]);

  const buttonHandler = (e) => {
    // e.preventDefault();
    setbuttonValue(userInput);
    // console.log('button');
    console.log(e);
  };

  const inputHandler = (e) => {
    setuserInput(e.target.value);
  };

  const keypressHandler = (e) => {
    if (e.key === "Enter") {
      buttonHandler();
      // console.log(e)
    }
  };

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://twelve-data1.p.rapidapi.com/time_series",
  //     params: {
  //       symbol: `${buttonValue}`,
  //       interval: "1day",
  //       outputsize: "10",
  //       format: "json",
  //     },
  //     headers: {
  //       "x-rapidapi-key": "52979a8a04msha30f088adf5a675p1868e1jsnc49e105d3bfc",
  //       "x-rapidapi-host": "twelve-data1.p.rapidapi.com",
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       setdata(response.data["values"]);
  //       // console.log(response.data["values"]);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // }, [buttonValue]);

  useEffect(() => {
    axios
      .get(
        "https://financialmodelingprep.com/api/v3/gainers?apikey=d7f8484c1c8ac4235b39e22345b8dbbd"
      )
      .then((response) => {
        setdata(response["data"]);
        console.log(response["data"]);
      });
  }, []);

  return (
    <div className="app">
      <div className="overlay">
        <div className="header">
          <p className="title">TradeAndLog</p>
          <IndexBar datas={data} />
        </div>
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
              <SearchBarButton buttonHandle={buttonHandler} />
            </div>
          </div>
          <div className="rightContent"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
