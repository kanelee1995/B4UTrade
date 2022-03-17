import { motion } from "framer-motion";
import SearchBar from "./Component/SearchBar";
import SearchBarButton from "./Component/SearchBarButton";
import MainPic from "./Assets/Images/MainPic2.png";

const mainContent = ({ userInput, inputHandler, handleSubmit }) => {
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
          {/* <FontAwesomeIcon icon={faSearch} className={"searchIcon"} /> */}
          <SearchBar
            userInput={userInput}
            inputHandle={inputHandler}
            handleSubmit={handleSubmit}
          />
        </div>
        <SearchBarButton className="invisibleButton" />
      </div>
      <motion.div
        className="rightContent"
        animate={{ y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {/* <MainPic className="MainPic" /> */}
        <img src={MainPic} alt="" className="MainPic" />
      </motion.div>
    </motion.div>
  );
};

export default mainContent;
