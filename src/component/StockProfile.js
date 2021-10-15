import React from "react";

const StockProfile = ({ profileData }) => {
  return (
    <div>
      <h2>{profileData.symbol}</h2>
      <p>{profileData.name}</p>
      <div className="companyLogo">
        <img src={profileData.logo} alt="CompanyLogo" />
      </div>
      <p>{profileData.description}</p>
    </div>
  );
};

export default StockProfile;
