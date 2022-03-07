import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IndexBar from "./component/IndexBar";

const Header = () => {
  const [mostGainerData, setMostGainerData] = useState([]);

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
    <div className="header">
      <Link
        to={{
          pathname: "/",
          hash: "#"
        }}
        className="title"
      >
        B4UTrade
      </Link>
      <IndexBar datas={mostGainerData} />
    </div>
  );
};

export default Header;
