import React from "react";

import "./GameSelection.scss";
import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";
import { ConsoleType } from "../../logic/Console/model";
import Console from "../Console/Console";
import Button from "../base/Button/Button";
import { ButtonMode } from "../../logic/Button/model";
import { withGameContext } from "../../shared/utils/withContext";
import { Game } from "../../logic/Game/Game";
import { IGameContext } from "../../logic/Game/context";

const GameSelection: React.FunctionComponent<IGameContext> = (props) => (
  <div className="game-selection">
    <div className="game-selection__container">
      <div className="container__consoles">
        <Console type={ConsoleType.Scissors} image={Scissors} />
        <Console type={ConsoleType.Paper} image={Paper} />
        <Console type={ConsoleType.Rock} image={Rock} />
      </div>
    </div>
    <div className="container__random">
      <Button
        mode={ButtonMode.Secondary}
        onClick={() => props.setGameState(Game.computerChoose(props))}
      >
        Let computer choose!
      </Button>
    </div>
  </div>
);

export default withGameContext(GameSelection);
