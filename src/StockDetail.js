import StockChart from './component/StockChart'
import StockProfile from './component/StockProfile'
import StockTable from './component/StockTable(Material Table)'



const StockDetail = ({profileData, stockDate, stockClose, tableData}) => {
  return (
    <div className="stockDetail">
      <StockProfile profileData={profileData}/>
      <StockChart stockDate={stockDate} stockClose={stockClose} />
      <StockTable tableData={tableData}/>
    </div>
  )
}

export default StockDetail
