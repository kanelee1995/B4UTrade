import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "font-awesome/css/font-awesome.min.css";

const SearchBar = ({ userInput, inputHandle}) => {
    const handleSubmit = () => {
        localStorage.setItem("userInput", userInput.toUpperCase());
        document.getElementById("searchButton").click();
        window.location.reload();
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
      <FontAwesomeIcon icon={faSearch} className={"searchIcon"} aria-hidden="true"/>
    </form>
  );
};

export default SearchBar;
  