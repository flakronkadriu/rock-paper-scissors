import React from "react";
import { ButtonSize } from "../../logic/Button/model";
import { IGameContext } from "../../logic/Game/context";
import { Game } from "../../logic/Game/Game";
import { GameStatus } from "../../logic/Game/model";
import { withGameContext } from "../../shared/utils/withContext";
import Button from "../base/Button/Button";

import "./GameMode.scss";

const GameMode: React.FunctionComponent<IGameContext> = (props) => (
  <div className="game-mode">
    <div className="game-mode__wrapper">
      <div className="game-mode__content">
        <div className="content__headline">
          <h1>Welcome to Rock, Paper, Scissors</h1>
        </div>
        <div className="content__btn_player">
          <Button
            size={ButtonSize.Medium}
            onClick={() =>
              props.setGameState(Game.setGameStatus(props, GameStatus.Started))
            }
          >
            Lets play!
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default withGameContext(GameMode);
