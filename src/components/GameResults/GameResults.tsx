import React from "react";

import "./GameResults.scss";
import ResultSelection from "../ResultSelection/ResultSelection";
import Button from "../base/Button/Button";
import { ButtonSize } from "../../logic/button/model";
import { withGameContext } from "../../shared/utils/withContext";
import { Game } from "../../logic/game/Game";
import { GameStateContext } from "../../logic/game/context";

const GameResults: React.FunctionComponent<GameStateContext> = (props) => {
  return (
    <div className="game_results">
      <div className="game_result__content">
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
