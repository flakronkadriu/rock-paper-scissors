import React from "react";

import Rock from "../../assets/rock.png";
import Paper from "../../assets/paper.png";
import Scissors from "../../assets/scissors.png";
import { ConsoleType } from "../../logic/console";
import { Console } from "../Console";
import { Button, ButtonMode, ButtonSize } from "../base/Button";
import { withGameStateContext } from "../../shared/utils/withContext";
import { Game } from "../../logic/game/Game";
import { GameStateExtended } from "../GamePlay/context";

import "./GameSelection.scss";

const GameSelection: React.FunctionComponent<GameStateExtended> = (props) => (
  <div className="game-selection" data-testid="game-selection">
    <div className="game-selection__container">
      <div className="container__consoles">
        <div className="console__left">
          <Console type={ConsoleType.Scissors} image={Scissors} />
        </div>
        <Console type={ConsoleType.Paper} image={Paper} />
      </div>
      <div className="console__bottom">
        <Console type={ConsoleType.Rock} image={Rock} />
      </div>
    </div>
    <div className="computer__selection">
      <Button
        mode={ButtonMode.Secondary}
        size={ButtonSize.Medium}
        onClick={() => props.setGameState(Game.computerSelection(props))}
      >
        Let computer choose!
      </Button>
    </div>
  </div>
);

export const GameSelectionEnhanced = withGameStateContext(GameSelection);
