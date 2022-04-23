import React from "react";

import { Picture } from "../base";
import { ResultSelectionProps } from "./model";
import { ConsoleType } from "../../logic/console/model";
import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";

import "./ResultSelection.scss";

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
        <h3>You</h3>
        <br />
        <Picture src={resultToImage[userInput]} height={getHeight()} />
      </div>
      <div>
        <h3>Computer</h3>
        <br />
        <Picture src={resultToImage[computerInput]} height={getHeight()} />
      </div>
    </div>
  );
};

export default ResultSelection;
