import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import StockDetail from "./StockDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/StockDetail" component={StockDetail} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;