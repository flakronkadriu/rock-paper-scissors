import React from "react";
import { GameStateExtended } from "../GamePlay/context";
import { Game } from "../../logic/game/Game";
import { ResultEnum } from "../../logic/result/model";
import { withGameStateContext } from "../../shared/utils/withContext";
import { Button, ButtonSize } from "../base/Button";
import { ResultMessage } from "../ResultMessage";

import "./GameOver.scss";

const GameOver: React.FunctionComponent<GameStateExtended> = (props) => (
  <div className="game_over">
    <div className="game_over__wrapper">
      <p className="game_over__title">Game over!</p>
      <ResultMessage
        result={props.wins === 10 ? ResultEnum.Win : ResultEnum.Lose}
      />
      <Button
        size={ButtonSize.Medium}
        onClick={() => props.setGameState(Game.playAgain())}
      >
        Play again?
      </Button>
    </div>
  </div>
);

export const GameOverEnhanced = withGameStateContext(GameOver);
