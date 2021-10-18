import StockChart from "./component/StockChart";
import StockFundamental from "./component/StockFundamental";
import StockProfile from "./component/StockProfile";
import StockTable from "./component/StockTable(Material Table)";

const StockDetail = ({
  profileData,
  stockDate,
  stockClose,
  tableData,
  earnings,
}) => {
  return (
    <div className="stockDetail">
      <StockProfile profileData={profileData} />
      <StockChart stockDate={stockDate} stockClose={stockClose} />
      <StockTable tableData={tableData} />
      <StockFundamental earnings={earnings} />
    </div>
  );
};

export default StockDetail;
