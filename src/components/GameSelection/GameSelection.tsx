import React from "react";

import "./GameSelection.scss";
import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";
import { ConsoleType } from "../../logic/console/model";
import Console from "../Console/Console";
import Button from "../base/Button/Button";
import { ButtonMode, ButtonSize } from "../../logic/button/model";
import { withGameContext } from "../../shared/utils/withContext";
import { Game } from "../../logic/game/Game";
import { GameStateContext } from "../../logic/game/context";

const GameSelection: React.FunctionComponent<GameStateContext> = (props) => (
  <div className="game-selection">
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

export default withGameContext(GameSelection);
