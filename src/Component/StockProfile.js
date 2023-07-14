import React, { useState, useEffect } from "react";
import axios from "axios";
// import { Link, Redirect } from "react-router-dom";
import ReactLoading from 'react-loading';
import API_KEYS from "../api";

const StockProfile = ({ userInput }) => {
    const [profileData, setprofileData] = useState([]);
    const [loading, setLoading] = useState(true);
    const key = API_KEYS.financialmodelingprep;

    useEffect(() => {
        axios
            .get(
                `https://financialmodelingprep.com/api/v3/profile/${userInput}?apikey=${key}`
            )
            .then((response) => {
                setprofileData(response["data"][0]);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInput]);

    const toggleText = () => {
        let btn = document.getElementById("readMore");

        if (btn.value === "Read more") {
            btn.value = "Collapse";
            btn.innerHTML = "Collapse";
        } else {
            btn.value = "Read more";
            btn.innerHTML = "Read more";
        }

        document
            .getElementById("companyDescription")
            .classList.toggle("companyDescriptionExpanded");
    };

    if (loading) {
        // <div className="Loader">
        <ReactLoading
          type={"spinningBubbles"}
          color={"#ffffff"}
          height={"30px"}
          width={"30px"}
        />
      {/* </div> */}
    }

    return (
        <div className="stockProfile">
            <div className="companyInfo">
                <p className="companyName">{profileData.symbol}</p>
                <div className="flex-row">
                    {" "}
                    <p className="companyDescription" id="companyDescription">
                        {profileData.description}
                    </p>{" "}
                    <button
                        id="readMore"
                        className="readMore"
                        onClick={toggleText}
                        value={"Read more"}
                    >
                        Read more
                    </button>
                </div>

                <p>Sector: {profileData.sector}</p>
                <a href={profileData.website}>Company Website </a>
            </div>
        </div>
    );
};

export default StockProfile;
