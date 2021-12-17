import { Line } from "react-chartjs-2";

const StockChart = ({stockDate, stockClose}) => {
  const data = {
    labels: stockDate,
    datasets: [
      {
        label: "Daily Close",
        data: stockClose,
        fill: true,
        backgroundColor: "rgb(6, 214, 160, 0.1)",
        borderColor: "#06d6a0",
        color: "rgb(233, 236, 239)",
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
    <div className="stockChart">
      <Line data={data} options={options} />
    </div>
  );
};

export default StockChart;
