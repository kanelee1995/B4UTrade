// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

const SearchBar = ({ userInput, inputHandle }) => {
  const handleSumbit = () => {
    localStorage.setItem("userInputStorage", userInput);
    return <Link to="/stockdetail"></Link>;
  };

  return (
    <form onSubmit={handleSumbit}>
      <input
        className="searchBar"
        type="text"
        value={userInput}
        placeholder={"Search by symbol..."}
        onChange={inputHandle}
      ></input>
    </form>
  );
};

export default SearchBar;
