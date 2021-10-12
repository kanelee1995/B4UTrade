// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = ({ userInput, inputHandle, keypressHandle }) => {
  return (
    <div>
      <input
        className="searchBar"
        type="text"
        value={userInput}
        placeholder={"Search by symbol..."}
        onChange={inputHandle}
        onKeyPress={keypressHandle}>
      </input>
    </div>
  );
};

export default SearchBar;
