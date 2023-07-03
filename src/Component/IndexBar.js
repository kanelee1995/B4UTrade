/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from "react-loading";
import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEYS from "../api";

const IndexBar = () => {
  const [mostGainerData, setMostGainerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const key = API_KEYS.financialmodelingprep;

  useEffect(() => {
    axios
      .get(`https://financialmodelingprep.com/api/v3/gainers?apikey=${key}`)
      .then((response) => {
        setMostGainerData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching gainer data:", error);
        setLoading(false);
      });
  }, []);

  const slicedDatas = mostGainerData.slice(0, 3);

  if (loading) {
    return (
      <div className="Loader" aria-busy="true" aria-live="polite">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#ffffff"}
          height={"30px"}
          width={"30px"}
          aria-label="Loading"
        />
        ;
      </div>
    );
  }

  return (
    <header className="indexBar">
      <div className="indexList">
        {slicedDatas.map((data) => (
          <div className="indexBarItem" key={data.ticker}>
            {data.ticker}
            <span className="whiteSpace" aria-hidden="true">
              {Math.round(data.changesPercentage * 100) / 100}%
              <span className="whiteSpace">
                <FontAwesomeIcon icon={faAngleUp} />
              </span>
            </span>
            <span className="indexComspananyName">{data.companyName}</span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default IndexBar;
