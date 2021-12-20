import { motion } from "framer-motion";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "./SearchBar";
import SearchBarButton from "./SearchBarButton";

const mainContent = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="mainContent"
    >
      <div className="leftContent">
        <h1 className="headline">Beat the market.</h1>
        <h2 className="subheadline">
          Get the lastest historical & fundamental data of a stock.
        </h2>
        <div className="searchContainer">
          <FontAwesomeIcon icon={faSearch} className={"searchIcon"} />
          <SearchBar
          // userInput={userInput}
          // inputHandle={inputHandler}
          // keypressHandle={keypressHandler}
          />
        </div>
        <SearchBarButton className="invisibleButton" />
      </div>
    </motion.div>
  );
};

export default mainContent;
