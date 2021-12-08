import MaterialTable from "material-table";
import { motion } from "framer-motion";


const StockNews = ({ news }) => {
  const columns = [
    {
      title: "Date",
      field: "published_utc",
    },
    {
      title: "Tickers",
      field: "tickers",
      render: (rowData) => rowData.tickers.slice(0,3).join(),
    },
    {
      title: "Title",
      field: "title",
      render: (rowData) => <a href={rowData.article_url}>{rowData.title}</a>,
    },
  ];

  return (
    <motion.div
    animate={{ opacity: 1 }}
    initial={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    className="stockTable"
  >  
      <MaterialTable
        columns={columns}
        data={news}
        title="Ticker News"
        options={{
          search: false,
          headerStyle: { backgroundColor: "#00000000", color: "#e9ecef" },
          // rowStyle: { backgroundColor: "#343a40", color: "#e9ecef" },
        }}
      />
    </motion.div>
  );
};

export default StockNews;
