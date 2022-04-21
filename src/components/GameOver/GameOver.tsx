import React from "react";
import { ButtonSize } from "../../logic/Button/model";
import { IGameContext } from "../../logic/Game/context";
import { Game } from "../../logic/Game/Game";
import { withGameContext } from "../../shared/utils/withContext";
import Button from "../base/Button/Button";

import "./GameOver.scss";

const GameOver: React.FunctionComponent<IGameContext> = (props) => (
  <div className="game_over">
    <div className="game_over__wrapper">
      <h1>
        Game over!
        <br />
        You {props.wins === 10 ? "WON" : "LOST"}
      </h1>

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
