import StockChart from "./component/StockChart";
import StockChartMobile from "./component/StockChartMobile";
import StockFundamental from "./component/StockFundamental";
import StockNews from "./component/StockNews";
import StockProfile from "./component/StockProfile";
import StockTable from "./component/StockTable(Material Table)";
import { motion } from "framer-motion";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useRouteMatch,
} from "react-router-dom";

const StockDetail = ({
  profileData,
  stockDate,
  stockClose,
  stockDateM,
  stockCloseM,
  tableData,
  earnings,
  news,
}) => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
                  <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="detailPage"
            >
        {/* <div className="detailPage"> */}
          <div className="stockDetail">
            <StockProfile profileData={profileData} />
            <StockChart stockDate={stockDate} stockClose={stockClose} />
            <StockChartMobile
              stockDateM={stockDateM}
              stockCloseM={stockCloseM}
            />
            <div className="Switcher">
              <Link to={`${url}`} className="SwitcherTab">
                Daily Data
              </Link>
              <Link to={`${url}/earnings`} className="SwitcherTab">
                Earnings
              </Link>
              <Link to={`${url}/news`} className="SwitcherTab">
                Company News
              </Link>
            </div>
            <Switch>
              <Route exact path={`${path}`}>
                <StockTable tableData={tableData} />
              </Route>
              <Route exact path={`${path}/earnings`}>
                <StockFundamental earnings={earnings} />
              </Route>
              <Route exact path={`${path}/news`}>
                <StockNews news={news} />
              </Route>
            </Switch>
          </div>
        {/* </div> */}
        </motion.div>
    </Router>
  );
};

export default StockDetail;
