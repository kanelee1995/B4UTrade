// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SearchBar = ({ userInput, inputHandle, keypressHandle }) => {
  return (
    <div>
      {/* <FontAwesomeIcon icon={['fas', 'search']} /> */}
      <input
        className="searchBar"
        type="text"
        value={userInput}
        placeholder={"Search by symbol..."}
        onChange={inputHandle}
        onKeyPress={keypressHandle}
      ></input>
      {/* <input type="submit" id="myBtn" value="Submit"></input> */}
    </div>
  );
};

export default SearchBar;
