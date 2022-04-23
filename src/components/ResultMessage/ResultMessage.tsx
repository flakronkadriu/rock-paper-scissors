import React from "react";
import { ResultEnum, ResultMessageProps } from "../../logic/result/model";
import Picture from "../base/Picture/Picture";

import Confetti from "../../asserts/confetti.png";
import Sad from "../../asserts/sad.png";
import Confused from "../../asserts/confused.png";

import "./ResultMessage.scss";
import { Result } from "../../logic/result/service/Result";
import { useMediaQuerySmall } from "../media-query";

const resultToImage = {
  [ResultEnum.Draw]: Confused,
  [ResultEnum.Win]: Confetti,
  [ResultEnum.Lose]: Sad,
};

const ResultMessage: React.FunctionComponent<ResultMessageProps> = ({
  result,
}) => {
  const isSmall = useMediaQuerySmall();

  return (
    <div className="result">
      <div className="result__headline">
        <h1 className="result__h1">{Result.getResultMessage(result)}</h1>
        <Picture src={resultToImage[result]} height={isSmall ? 50 : 80} />
      </div>
    </div>
  );
};

export default ResultMessage;
