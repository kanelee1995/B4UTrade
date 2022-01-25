import React, { useState, useEffect } from "react";
import axios from "axios";

const StockProfile = ({ userInput }) => {
  const [profileData, setprofileData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://financialmodelingprep.com/api/v3/profile/${userInput}?apikey=d7f8484c1c8ac4235b39e22345b8dbbd`
      )
      .then((response) => {
        setprofileData(response["data"][0]);
        // console.log(response["data"])
      });
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

  return (
    <div className="stockProfile">
      <div className="companyInfo">
        <p className="companyName">{profileData.symbol}</p>
        <div className="flex-row">
          {" "}
          <p className="companyDescription" id="companyDescription">
            {profileData.description}
          </p>{" "}
          <button id="readMore" className="readMore" onClick={toggleText} value={"Read more"}>
            Read more
          </button>
        </div>

        <p>Sector: {profileData.sector}</p>
        <a href={profileData.website}>Company Website </a>
      </div>
      {/* <div className="companyLogo">
        <img src={profileData.logo} alt="CompanyLogo" />
      </div> */}
    </div>
  );
};

export default StockProfile;
