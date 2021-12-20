import React, { useState, useEffect } from "react";
import axios from "axios";

const StockProfile = ({ userInput }) => {
  const [profileData, setprofileData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.polygon.io/v1/meta/symbols/${userInput}/company?apiKey=REGDCE9oeokuBTeCkEQpYRH81FU_a7if`
      )
      .then((response) => {
        setprofileData(response["data"]);
      });
  });

  return (
    <div className="stockProfile">
      <div className="companyInfo">
        <div className="profileCompanyName">{profileData.symbol}</div>
        <p>{profileData.description}</p>
        <p>Sector: {profileData.sector}</p>
        <a href={profileData.url}>Company Website </a>
      </div>
      {/* <div className="companyLogo">
        <img src={profileData.logo} alt="CompanyLogo" />
      </div> */}
    </div>
  );
};

export default StockProfile;
