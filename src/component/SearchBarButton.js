const SearchBarButton = ({ buttonHandle }) => {
  return (
    <button type="submit" className="searchButton" onClick={buttonHandle}>
      Search
    </button>
  );
};

export default SearchBarButton;
