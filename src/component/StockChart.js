import { Line } from "react-chartjs-2";

const StockChart = ({stockDate, stockClose}) => {
  const data = {
    labels: stockDate,
    datasets: [
      {
        label: "Daily Close",
        data: stockClose,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132)",
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
    <div>
      <Line data={data} height={600} width={800} options={options} />
    </div>
  );
};

export default StockChart;
