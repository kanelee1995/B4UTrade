import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const IndexBar = ({ datas }) => {
  const slicedDatas = datas.slice(0, 3);

  return (
    <div className="indexBar">
      <ul className="indexList">
        {slicedDatas.map((data) => (
          <li className="indexBarItem">
            {data["ticker"]}
            <span className="whiteSpace">
              {Math.round(data["changesPercentage"] * 100) / 100}%
              <span className="whiteSpace">
                <FontAwesomeIcon icon={faAngleUp} />
              </span>
            </span>
            <div className="companyName">{data["companyName"]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexBar;
