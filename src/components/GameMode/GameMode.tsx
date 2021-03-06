import React from "react";
import { Button, ButtonMode, ButtonSize } from "../base/Button";
import { GameModeProps } from "./model";
import { GameStateExtended } from "../GamePlay/context";
import { Game } from "../../logic/game/Game";
import { GameStatus } from "../../logic/game/model";
import { withGameStateContext } from "../../shared/utils/withContext";

import "./GameMode.scss";

type Props = GameModeProps & GameStateExtended;

const GameMode: React.FunctionComponent<Props> = (props) => (
  <div className="game-mode" data-testid="game-mode">
    <div className="game-mode__wrapper">
      <div className="game-mode__content">
        <div className="content__headline">
          <h1>Welcome to Rock, Paper, Scissors</h1>
        </div>
        <div className="content__btn_player">
          <Button
            size={ButtonSize.Medium}
            data-testid="game-mode-play-btn"
            onClick={() =>
              props.setGameState(Game.setGameStatus(props, GameStatus.Started))
            }
          >
            Lets play!
          </Button>
        </div>
        <Button
          mode={ButtonMode.Secondary}
          onClick={props.openModal}
          data-testid="game-mode-rules-btn"
        >
          Game rules
        </Button>
      </div>
    </div>
  </div>
);

export const GameModeEnhanced = withGameStateContext(GameMode);
