import React from "react";
import { ButtonMode, ButtonSize } from "../../logic/button/model";
import { GameModeProps } from "../../logic/game-mode";
import { GameStateContext } from "../../logic/game/context";
import { Game } from "../../logic/game/Game";
import { GameStatus } from "../../logic/game/model";
import { withGameContext } from "../../shared/utils/withContext";
import Button from "../base/Button/Button";

import "./GameMode.scss";

type Props = GameModeProps & GameStateContext;

const GameMode: React.FunctionComponent<Props> = (props) => (
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
        <Button mode={ButtonMode.Secondary} onClick={props.openModal}>
          Game rules
        </Button>
      </div>
    </div>
  </div>
);

export default withGameContext(GameMode);
