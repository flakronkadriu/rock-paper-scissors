import React from "react";
import Points from "../Points/Points";

import "./Score.scss";

const Score: React.FunctionComponent = () => (
  <div className="score">
    <div className="score__content">
      <h1>Score</h1>
      <div className="content__wrapper">
        <div className="content__column">
          <Points title="Wins" score={0} />
        </div>
        <div className="content__column">
          <Points title="Lose" score={0} />
        </div>
      </div>
    </div>
  </div>
);

export default Score;
