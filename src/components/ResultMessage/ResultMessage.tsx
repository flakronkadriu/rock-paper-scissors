import React from "react";
import { ResultEnum, ResultMessageProps } from "../../logic/Result/model";
import Picture from "../base/Picture/Picture";

import Confetti from "../../asserts/confetti.png";
import Sad from "../../asserts/sad.png";
import Confused from "../../asserts/confused.png";

import "./ResultMessage.scss";
import { Result } from "../../logic/Result/service/Result";

const resultToImage = {
  [ResultEnum.DRAW]: Confused,
  [ResultEnum.WIN]: Confetti,
  [ResultEnum.LOST]: Sad,
};

const ResultMessage: React.FunctionComponent<ResultMessageProps> = ({
  result,
}) => (
  <div className="result">
    <div className="result__headline">
      <h1 className="result__h1">{Result.getResultMessage(result)}</h1>
      <Picture src={resultToImage[result]} width={80} height={80} />
    </div>
  </div>
);

export default ResultMessage;
