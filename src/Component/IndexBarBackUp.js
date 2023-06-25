import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import axios from "axios";


const IndexBar = () => {
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

    const slicedDatas = mostGainerData.slice(0, 3);

    return (
        <header className="indexBar">
            <div className="indexList">
                {slicedDatas.map((data) => (
                    <div className="indexBarItem" key={data["ticker"]}>
                        {data["ticker"]}
                        <span className="whiteSpace">
                            {Math.round(data["changesPercentage"] * 100) / 100}%
                            <span className="whiteSpace">
                                <FontAwesomeIcon icon={faAngleUp} />
                            </span>
                        </span>
                        <p className="indexCompanyName">{data["companyName"]}</p>
                    </div>
                ))}
            </div>
        </header>
    );
};

export default IndexBar;
