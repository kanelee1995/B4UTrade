const SearchBar = ({userInput, inputHandle}) => {
  return <input className="searchBar" type="text" value={userInput} placeholder={"AAPL"} onChange={inputHandle}></input>;
};

export default SearchBar;
