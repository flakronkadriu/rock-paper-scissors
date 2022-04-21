import React from "react";

import "./GameSelection.scss";
import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";
import { ConsoleType } from "../../logic/Console/model";
import Console from "../Console/Console";
import Button from "../base/Button/Button";
import { ButtonMode, ButtonSize } from "../../logic/Button/model";
import { withGameContext } from "../../shared/utils/withContext";
import { Game } from "../../logic/Game/Game";
import { IGameContext } from "../../logic/Game/context";

const GameSelection: React.FunctionComponent<IGameContext> = (props) => (
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
    <div>
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
