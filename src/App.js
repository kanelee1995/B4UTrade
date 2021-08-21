import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarButton from "./component/SearchBarButton";
import SearchBar from "./component/SearchBar";
// import StockRow from "./component/StockRow";
import StockTable from "./component/StockTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [userInput, setuserInput] = useState("");
  const [buttonValue, setbuttonValue] = useState("");
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

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://twelve-data1.p.rapidapi.com/time_series",
      params: {
        symbol: `${buttonValue}`,
        interval: "1day",
        outputsize: "5",
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
        setdata(response.data["values"]);
        // console.log(response.data["values"]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [buttonValue]);

  return (
    <div className="app">
      <div className="header">
        <p className="title">TradeAndLog</p>
      </div>
      <div className="mainContent">
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
      {/* <StockTable data={data} /> */}
    </div>
  );
}

export default App;
