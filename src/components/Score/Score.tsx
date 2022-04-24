import React from "react";

import { withGameStateContext } from "../../shared/utils/withContext";
import { GameStateExtended } from "../GamePlay/context";
import { Points } from "../Points";

import "./Score.scss";

const Score: React.FunctionComponent<GameStateExtended> = ({ wins, lose }) => (
  <div className="score" data-testid="score">
    <div className="score__content">
      <p className="score__title">Score</p>
      <div className="content__wrapper">
        <div className="content__column">
          <Points title="Wins" score={wins} testId="wins" />
        </div>
        <div>
          <Points title="Lose" score={lose} testId="lose" />
        </div>
      </div>
    </div>
  </div>
);

export const ScoreEnhanced = withGameStateContext(Score);
