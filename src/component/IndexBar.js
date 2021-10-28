import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const IndexBar = ({ datas }) => {
  const slicedDatas = datas.slice(0, 3);

  return (
    <div className="indexBar">
      <div className="indexList">
        {slicedDatas.map((data) => (
          <div className="indexBarItem">
            {data["ticker"]}
            <span className="whiteSpace">
              {Math.round(data["changesPercentage"] * 100) / 100}%
              <span className="whiteSpace">
                <FontAwesomeIcon icon={faAngleUp} />
              </span>
            </span>
            <p className="companyName">{data["companyName"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndexBar;
