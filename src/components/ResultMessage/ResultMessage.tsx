import React from "react";

import { GameResult } from "../../logic/result/model";
import { Picture } from "../base/Picture";
import Confetti from "../../assets/confetti.png";
import Sad from "../../assets/sad.png";
import Confused from "../../assets/confused.png";
import { Result } from "../../logic/result/Result";
import { useMediaQuerySmall } from "../media-query";
import { ResultMessageProps } from "./model";

import "./ResultMessage.scss";

const resultToImage = {
  [GameResult.Draw]: Confused,
  [GameResult.Win]: Confetti,
  [GameResult.Lose]: Sad,
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

export { ResultMessage };
