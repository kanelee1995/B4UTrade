import StockChart from "../Component/StockChart";
import StockChartMobile from "../Component/StockChartMobile";
import StockFundamental from "../Component/StockFundamental";
import StockNews from "../Component/StockNews";
import StockProfile from "../Component/StockProfile";
import StockTable from "../Component/StockDaily";
import { motion } from "framer-motion";
import {
  HashRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

const StockDetail = ({ userInput }) => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        className="detailPage"
      >
        {/* <div className="stockDetail"> */}
          <StockProfile userInput={userInput} />
          <StockChart userInput={userInput} />
          <StockChartMobile userInput={userInput} />
          <div className="Switcher">
            <Link to={`${url}`} className="SwitcherTab">
              Daily
            </Link>
            <Link to={`${url}/earnings`} className="SwitcherTab">
              Earnings
            </Link>
            <Link to={`${url}/news`} className="SwitcherTab">
              News
            </Link>
          </div>
          <Switch>
            <Route exact path={`${path}`}>
              <StockTable userInput={userInput} />
            </Route>
            <Route exact path={`${path}/earnings`}>
              <StockFundamental userInput={userInput} />
            </Route>
            <Route exact path={`${path}/news`}>
              <StockNews userInput={userInput} />
            </Route>
          </Switch>
        {/* </div> */}
      </motion.div>
    </Router>
  );
};

export default StockDetail;
