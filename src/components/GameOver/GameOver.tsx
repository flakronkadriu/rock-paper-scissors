import React from "react";
import { withGameContext } from "../../shared/utils/withContext";

import "./GameOver.scss";

const GameOver: React.FunctionComponent = () => (
  <div className="game_over">
    <div className="game_over__wrapper">
      <h1>
        Game over!
        <br />
        You lost
      </h1>
    </div>
  </div>
);

export default withGameContext(GameOver);
