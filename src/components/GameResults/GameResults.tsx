import React from "react";

import { ResultSelection } from "../ResultSelection";
import { Button, ButtonSize } from "../base/Button";
import { withGameStateContext } from "../../shared/utils/withContext";
import { Game } from "../../logic/game/Game";
import { GameStateExtended } from "../GamePlay/context";

import "./GameResults.scss";

const GameResults: React.FunctionComponent<GameStateExtended> = (props) => {
  return (
    <div className="game_results" data-testid="game-results">
      <div className="game_result__content">
        <div className="content__btn">
          <Button
            size={ButtonSize.Medium}
            onClick={() => props.setGameState(Game.setIsPlaying(props, true))}
          >
            Try again?
          </Button>
        </div>
        <ResultSelection />
      </div>
    </div>
  );
};
export const GameResultsEnhanced = withGameStateContext(GameResults);
