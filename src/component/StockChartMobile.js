import { Line } from "react-chartjs-2";

const StockChart = ({stockDateM, stockCloseM}) => {
  const data = {
    labels: stockDateM,
    datasets: [
      {
        label: "Daily Close",
        data: stockCloseM,
        fill: true,
        backgroundColor: "rgb(6, 214, 160, 0.3)",
        borderColor: "#06d6a0",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="stockChartMobile">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
