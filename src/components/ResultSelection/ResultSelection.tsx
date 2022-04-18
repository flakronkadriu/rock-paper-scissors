import React from "react";
import Picture from "../base/Picture/Picture";
import { ResultSelectionProps } from "../../logic/Result/model";
import { ConsoleType } from "../../logic/Console/model";

import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";

import "./ResultSelection.scss";

const resultToImage = {
  [ConsoleType.Paper]: Paper,
  [ConsoleType.Rock]: Rock,
  [ConsoleType.Scissors]: Scissors,
};

const ResultSelection: React.FunctionComponent<ResultSelectionProps> = ({
  userInput,
  computerInput,
}) => (
  <div className="result-selection">
    <div className="result-selection__column">
      <h1>Your selection</h1>
      <Picture src={resultToImage[userInput]} height={150} />
    </div>
    <div className="result-selection__column">
      <h1>Computer selection</h1>
      <Picture src={resultToImage[computerInput]} height={150} />
    </div>
  </div>
);

export default ResultSelection;
