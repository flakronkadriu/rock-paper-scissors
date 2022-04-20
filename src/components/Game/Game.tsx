import React from "react";
import { IGame } from "../../logic/Game/model";
import { withGameContext } from "../../shared/utils/withContext";
import GameResults from "../GameResults/GameResults";
import GameSelection from "../GameSelection/GameSelection";
import Score from "../Score/Score";

import "./Game.scss";

const GameComponent: React.FunctionComponent<IGame> = ({ isPlaying }) => (
  <div className="game__wrapper">
    <Score />
    <GameSelection />
    {isPlaying && <GameResults />}
  </div>
);

export default withGameContext(GameComponent);
