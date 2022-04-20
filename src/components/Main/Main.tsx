import React from "react";
import GameMode from "../GameMode/GameMode";
import GameComponent from "../Game/Game";

import "./Main.scss";
import { GameContext } from "../../logic/Game/context/game-context";
import { Game } from "../../logic/Game/Game";
import { GameStatus, IGame } from "../../logic/Game/model";
import { IGameContext } from "../../logic/Game/context";
import GameOver from "../GameOver/GameOver";

const Main: React.FC = () => {
  const [gameState, setGameState] = React.useState<IGame>(Game.createDefault());

  const values = { ...gameState, setGameState } as IGameContext;

  return (
    <div className="main">
      <GameContext.Provider value={values}>
        {values.gameStatus === GameStatus.Init && <GameMode />}
        {values.gameStatus === GameStatus.Started && <GameComponent />}
        {values.gameStatus === GameStatus.End && <GameOver />}
      </GameContext.Provider>
    </div>
  );
};

export default Main;
