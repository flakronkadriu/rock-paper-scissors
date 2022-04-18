import React from "react";

import "./GameSelection.scss";
import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";
import { ConsoleType } from "../../logic/Console/model";
import Console from "../Console/Console";
import Button from "../base/Button/Button";
import { ButtonMode } from "../../logic/Button/model";

const GameSelection: React.FunctionComponent = () => (
  <div className="game-selection">
    <div className="game-selection__container">
      <div className="container__consoles">
        <Console type={ConsoleType.Scissors} image={Scissors} />
        <Console type={ConsoleType.Paper} image={Paper} />
        <Console type={ConsoleType.Rock} image={Rock} />
      </div>
    </div>
    <div className="container__random">
      <Button mode={ButtonMode.Secondary}>Let computer choose!</Button>
    </div>
  </div>
);

export default GameSelection;
