import StockChart from "../Component/StockChart";
// import StockChartMobile from "../Component/StockChartMobile";
import { lazy, Suspense } from 'react';
// import StockFundamental from "../Component/StockFundamental";
// import StockNews from "../Component/StockNews";
import StockProfile from "../Component/StockProfile";
// import StockTable from "../Component/StockDaily";
import { motion } from "framer-motion";
import ReactLoading from 'react-loading';
import {
    HashRouter as Router,
    Route,
    Switch,
    Link,
    useRouteMatch,
} from "react-router-dom";

const StockFundamental = lazy(() => import('../Component/StockFundamental'));
const StockNews = lazy(() => import('../Component/StockNews'));
const StockTable = lazy(() => import('../Component/StockDaily'));
const StockChartMobile = lazy(() => import('../Component/StockChartMobile'));

const StockDetail = ({ userInput }) => {
    let { path, url } = useRouteMatch();
    const loading = <ReactLoading type={"spinningBubbles"} color={"#ffffff"} height={'30px'} width={'30px'} />

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
                <Suspense fallback={loading}>
                    <StockChartMobile userInput={userInput} />
                </Suspense>
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
                        {/* <StockTable userInput={userInput} /> */}
                        <Suspense fallback={loading}>
                            <StockTable userInput={userInput} />
                        </Suspense>
                    </Route>
                    <Route exact path={`${path}/earnings`}>
                        {/* <StockFundamental userInput={userInput} /> */}
                        <Suspense fallback={loading}>
                            <StockFundamental userInput={userInput} />
                        </Suspense>
                    </Route>
                    <Route exact path={`${path}/news`}>
                        {/* <StockNews userInput={userInput} /> */}
                        <Suspense fallback={loading}>
                            <StockNews userInput={userInput} />
                        </Suspense>
                    </Route>
                </Switch>
                {/* </div> */}
            </motion.div>
        </Router>
    );
};

export default StockDetail;
