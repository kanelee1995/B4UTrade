import React from "react";

const StockProfile = ({ profileData }) => {
  return (
    <div className="stockProfile">
      <div className="companyLogo">
        <img src={profileData.logo} alt="CompanyLogo" />
      </div>
      <h2>{profileData.symbol}</h2>
      <p>{profileData.name}</p>
      <p>{profileData.description}</p>
      <p>Sector: {profileData.sector}</p>
      <p>{profileData.url}</p>
    </div>
  );
};

export default StockProfile;
