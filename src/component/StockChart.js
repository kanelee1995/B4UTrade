import { Line } from "react-chartjs-2";

const StockChart = ({stockDate, stockClose}) => {
  const data = {
    labels: stockDate,
    datasets: [
      {
        label: "Daily Close",
        data: stockClose,
        fill: true,
        backgroundColor: "rgb(71, 254, 63, 0.3)",
        borderColor: "rgba(71, 254, 63)",
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
      <Line data={data} height={600} width={800} options={options} />
    </div>
  );
};

export default StockChart;
