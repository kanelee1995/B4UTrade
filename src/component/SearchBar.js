// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { Link } from "react-router-dom";

const SearchBar = ({ userInput, inputHandle, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="searchBar"
        type="text"
        value={userInput}
        placeholder={"Search by symbol..."}
        onChange={inputHandle}
        >
      </input>
    </form>
  );
};

export default SearchBar;
