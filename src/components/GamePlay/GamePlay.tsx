import React from "react";
import { GameStatus, GameState } from "../../logic/game/model";
import { withGameStateContext } from "../../shared/utils/withContext";
import { GameOver } from "../GameOver";
import { GameResults } from "../GameResults";
import { GameSelection } from "../GameSelection";
import { Score } from "../Score";

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

export const GamePlayEnhanced = withGameStateContext(GamePlay);
