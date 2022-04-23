import React from "react";
import { ButtonSize } from "../../logic/button/model";
import { GameStateContext } from "../../logic/game/context";
import { Game } from "../../logic/game/Game";
import { ResultEnum } from "../../logic/result/model";
import { withGameContext } from "../../shared/utils/withContext";
import Button from "../base/Button/Button";
import ResultMessage from "../ResultMessage/ResultMessage";

import "./GameOver.scss";

const GameOver: React.FunctionComponent<GameStateContext> = (props) => (
  <div className="game_over">
    <div className="game_over__wrapper">
      <h1>Game over!</h1>
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

export default withGameContext(GameOver);
