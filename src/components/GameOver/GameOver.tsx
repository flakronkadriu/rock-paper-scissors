import React from "react";
import { IGameContext } from "../../logic/Game/context";
import { withGameContext } from "../../shared/utils/withContext";

import "./GameOver.scss";

const GameOver: React.FunctionComponent<IGameContext> = (props) => (
  <div className="game_over">
    <div className="game_over__wrapper">
      <h1>
        Game over!
        <br />
        You {props.wins === 10 ? "WON" : "LOST"}
      </h1>
    </div>
  </div>
);

export default withGameContext(GameOver);
