import React from 'react'
import StockChart from './component/StockChart'
import StockTable from './component/StockTable'

const StockDetail = ({stockDate, stockClose, tableData}) => {
  return (
    <div className="stockDetail">
      <StockChart stockDate={stockDate} stockClose={stockClose} />
      <StockTable tableData={tableData} />
    </div>
  )
}

export default StockDetail
