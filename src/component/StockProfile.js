import React from "react";

const StockProfile = ({ profileData }) => {
  return (
    <div className="stockProfile">
      <div className="companyLogo">
        <img src={profileData.logo} alt="CompanyLogo" />
      </div>

      <div className="companyInfo">
        <div className="profileCompanyName">{profileData.symbol}</div>
        <p>{profileData.description}</p>
        <p>Sector: {profileData.sector}</p>
        <a href={profileData.url}>Company Website </a>
      </div>
    </div>
  );
};

export default StockProfile;
