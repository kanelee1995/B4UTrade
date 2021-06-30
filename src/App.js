import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBarButton from "./component/SearchBarButton";
import SearchBar from "./component/SearchBar";
// import StockRow from "./component/StockRow";
import StockTable from "./component/StockTable";

function App() {
  const [userInput, setuserInput] = useState("AAPL");
  const [buttonValue, setbuttonValue] = useState("AAPL");
  const [data, setdata] = useState([]);

  const buttonHandler = () => {
    setbuttonValue(userInput);
    // console.log('button');
  };

  const inputHandler = (e) => {
    setuserInput(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `http://api.marketstack.com/v1/eod?access_key=e25d2900d3c40a68798721f8430a5753&symbols=${buttonValue}&limit=10`
      )
      .then((res) => {
        const jsonData = res["data"];
        // setdata(jsonData["data"].map((data) => <p>Symbol:{data["symbol"]}     Date:{data["date"]}     Open:{data["open"]}</p>));
        // console.log(jsonData["data"]);
        setdata(jsonData["data"]);
        console.log(jsonData["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonValue]);

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Stock Data - 10 Days</h1>
        <div className="searchContainer">
          <SearchBar userInput={userInput} inputHandle={inputHandler} />
          <SearchBarButton buttonHandle={buttonHandler} />
        </div>
      </div>
      {/* <StockRow data={data} /> */}
      <StockTable data={data} />
    </div>
  );
}

export default App;
