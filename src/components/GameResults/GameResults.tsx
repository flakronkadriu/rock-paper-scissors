import React from "react";
import ResultMessage from "../ResultMessage/ResultMessage";

import "./GameResults.scss";
import ResultSelection from "../ResultSelection/ResultSelection";
import { ConsoleType } from "../../logic/Console/model";
import { ResultEnum } from "../../logic/Result/model";
import Button from "../base/Button/Button";
import { ButtonSize } from "../../logic/Button/model";

const GameResults: React.FunctionComponent = () => {
  return (
    <div className="game_results">
      <div className="game_result__content">
        <ResultMessage result={ResultEnum.DRAW} />
        <div className="content__btn">
          <Button size={ButtonSize.Medium}>Play again?</Button>
        </div>
        <ResultSelection
          userInput={ConsoleType.Paper}
          computerInput={ConsoleType.Rock}
        />
      </div>
    </div>
  );
};
export default GameResults;
