import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import ReactLoading from 'react-loading';
import React, { useState, useEffect } from "react";
import axios from "axios";

const IndexBar = () => {
  const [mostGainerData, setMostGainerData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://financialmodelingprep.com/api/v3/gainers?apikey=d7f8484c1c8ac4235b39e22345b8dbbd")
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
    return <ReactLoading type={"spinningBubbles"} color={"#ffffff"} height={'30px'} width={'30px'} />;
  }

  return (
    <header className="indexBar">
      <div className="indexList">
        {slicedDatas.map((data) => (
          <div className="indexBarItem" key={data.ticker}>
            {data.ticker}
            <span className="whiteSpace">
              {Math.round(data.changesPercentage * 100) / 100}%
              <span className="whiteSpace">
                <FontAwesomeIcon icon={faAngleUp} />
              </span>
            </span>
            <p className="indexCompanyName">{data.companyName}</p>
          </div>
        ))}
      </div>
    </header>

  );
};

export default IndexBar;
