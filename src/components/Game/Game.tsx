import React from "react";
import GameSelection from "../GameSelection/GameSelection";
import Score from "../Score/Score";

import "./Game.scss";

const Game: React.FunctionComponent = () => (
  <div className="game__wrapper">
    <Score />
    <GameSelection />
  </div>
);

export default Game;
