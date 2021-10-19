import StockChart from "./component/StockChart";
import StockFundamental from "./component/StockFundamental";
import StockNews from "./component/StockNews";
import StockProfile from "./component/StockProfile";
import StockTable from "./component/StockTable(Material Table)";
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
  tableData,
  earnings,
  news,
}) => {
  let { path, url } = useRouteMatch();

  return (
    <Router>
      <div className="stockDetail">
        <StockProfile profileData={profileData} />
        <StockChart stockDate={stockDate} stockClose={stockClose} />
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
    </Router>
  );
};

export default StockDetail;
