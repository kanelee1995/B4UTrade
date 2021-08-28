const IndexBar = ({ datas }) => {
  return (
    <div>
      <ul>
        {datas.map((data) => (
          <li>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexBar;
