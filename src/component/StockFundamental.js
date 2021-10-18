const StockFundamental = ({ earnings }) => {
  return (
    <div className="fundamentals">
      <p>
        Actual Earnings:{" "}
        {earnings.map((data) => (
          <li>{data.reportedEPS}</li>
        ))}
        Estimated:{" "}
        {earnings.map((data) => (
          <li>{data.estimatedEPS}</li>
        ))}
        Surprise %:{" "}
        {earnings.map((data) => (
          <li>{data.surprisePercentage}</li>
        ))}
      </p>
    </div>
  );
};

export default StockFundamental;
