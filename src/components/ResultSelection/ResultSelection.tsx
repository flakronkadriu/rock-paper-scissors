import React from "react";
import Picture from "../base/Picture/Picture";
import { ResultSelectionProps } from "../../logic/Result/model";
import { ConsoleType } from "../../logic/Console/model";

import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";

import "./ResultSelection.scss";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";

const resultToImage = {
  [ConsoleType.Paper]: Paper,
  [ConsoleType.Rock]: Rock,
  [ConsoleType.Scissors]: Scissors,
};

const ResultSelection: React.FunctionComponent<ResultSelectionProps> = ({
  userInput,
  computerInput,
}) => {
  const isSmall = useMediaQuerySmall();
  const isRetina = useMediaQueryRetina();

  const getHeight = () => {
    if (isSmall) return 80;
    if (isRetina) return 100;
    return 150;
  };

  return (
    <div className="result-selection">
      <div className="result-selection__column">
        <h1>Your selection</h1>
        <br />
        <Picture src={resultToImage[userInput]} height={getHeight()} />
      </div>
      <div>
        <h1>Computer selection</h1>
        <br />
        <Picture src={resultToImage[computerInput]} height={getHeight()} />
      </div>
    </div>
  );
};

export default ResultSelection;
