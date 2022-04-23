import React from "react";
import { GameStatus, GameState } from "../../logic/game/model";
import { withGameContext } from "../../shared/utils/withContext";
import GameOver from "../GameOver/GameOver";
import GameResults from "../GameResults/GameResults";
import GameSelection from "../GameSelection/GameSelection";
import Score from "../Score/Score";

import "./GamePlay.scss";

const GamePlay: React.FunctionComponent<GameState> = ({
  isPlaying,
  gameStatus,
}) => (
  <div className="game__wrapper">
    <Score />
    {gameStatus === GameStatus.Started && (
      <div>
        {isPlaying && <GameSelection />}
        {!isPlaying && <GameResults />}
      </div>
    )}
    {gameStatus === GameStatus.End && <GameOver />}
  </div>
);

export default withGameContext(GamePlay);
