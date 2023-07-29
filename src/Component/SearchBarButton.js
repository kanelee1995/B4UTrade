import { Link } from "react-router-dom";

const SearchBarButton = () => {
  return (
    <Link
      to="/stockdetail"
      id="searchButton"
      className="invisibleButton"
      aria-label="Go to Stock Detail Page"
    ></Link>
  );
};

export default SearchBarButton;
