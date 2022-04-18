import React from "react";
import GameResults from "../GameResults/GameResults";
import GameSelection from "../GameSelection/GameSelection";
import Score from "../Score/Score";

import "./Game.scss";

const Game: React.FunctionComponent = () => (
  <div className="game__wrapper">
    <Score />
    {/* <GameSelection /> */}
    <GameResults />
  </div>
);

export default Game;
