import React from "react";
import ResultMessage from "../ResultMessage/ResultMessage";

import "./GameResults.scss";
import ResultSelection from "../ResultSelection/ResultSelection";
import Button from "../base/Button/Button";
import { ButtonSize } from "../../logic/Button/model";
import { withGameContext } from "../../shared/utils/withContext";
import { Game } from "../../logic/Game/Game";
import { IGameContext } from "../../logic/Game/context";

const GameResults: React.FunctionComponent<IGameContext> = (props) => {
  return (
    <div className="game_results">
      <div className="game_result__content">
        <ResultMessage result={props.result} />
        <div className="content__btn">
          <Button
            size={ButtonSize.Medium}
            onClick={() => props.setGameState(Game.setIsPlaying(props, true))}
          >
            Try again?
          </Button>
        </div>
        <ResultSelection
          userInput={props.userInput}
          computerInput={props.computerInput}
        />
      </div>
    </div>
  );
};
export default withGameContext(GameResults);
