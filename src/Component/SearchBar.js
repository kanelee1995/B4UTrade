import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";
import { useState } from "react";
import API_KEYS from "../api";
import axios from "axios";

const SearchBar = ({ userInput, inputHandle }) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const key = API_KEYS.financialmodelingprep;

const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!userInput) {
      setError(true);
      setErrorMessage("Please enter a stock ticker");
      return;
    }
  
    try {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${userInput}?apikey=${key}`);
      const data = response["data"][0].symbol;
  
      if (data === userInput) {
        localStorage.setItem("userInput", userInput.toUpperCase());
        document.getElementById("searchButton").click();
        window.location.reload();
      }
    } catch (error) {
        setError(true);
        setErrorMessage("Invalid stock ticker");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        type="text"
        value={userInput}
        placeholder="Search by symbol"
        onChange={inputHandle}
      ></input>
      <FontAwesomeIcon
        icon={faSearch}
        className={"searchIcon"}
        aria-hidden="true"
      />
      {error && <div className="errorTooltip">{errorMessage}</div>}
    </form>
  );
};

export default SearchBar;
