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
        setprofileData(response["data"]);
        // console.log(response["data"])
      });
  });

  return (
    <div className="stockProfile">
      <div className="companyInfo">
        <div className="profileCompanyName">{profileData.symbol}</div>
        <p>{profileData.description}</p>
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
