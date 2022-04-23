import React from "react";
import { GameStateContext } from "../../logic/game/context";
import { withGameContext } from "../../shared/utils/withContext";
import Points from "../Points/Points";

import "./Score.scss";

const Score: React.FunctionComponent<GameStateContext> = ({ wins, lose }) => (
  <div className="score">
    <div className="score__content">
      <h1>Score</h1>
      <div className="content__wrapper">
        <div className="content__column">
          <Points title="Wins" score={wins} />
        </div>
        <div>
          <Points title="Lose" score={lose} />
        </div>
      </div>
    </div>
  </div>
);

export default withGameContext(Score);