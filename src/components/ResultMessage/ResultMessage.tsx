import React from "react";

import { ResultEnum } from "../../logic/result/model";
import { Picture } from "../base";
import Confetti from "../../asserts/confetti.png";
import Sad from "../../asserts/sad.png";
import Confused from "../../asserts/confused.png";
import { Result } from "../../logic/result/Result";
import { useMediaQuerySmall } from "../media-query";
import { ResultMessageProps } from "./model";

import "./ResultMessage.scss";

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
        <p className="result__title">{Result.getResultMessage(result)}</p>
        <Picture src={resultToImage[result]} height={isSmall ? 50 : 80} />
      </div>
    </div>
  );
};

export default ResultMessage;
