import React from "react";
import GameMode from "../GameMode/GameMode";
import GamePlay from "../GamePlay/GamePlay";

import "./Main.scss";
import { GameContext } from "../../logic/Game/context/game-context";
import { Game } from "../../logic/Game/Game";
import { GameStatus, IGame } from "../../logic/Game/model";
import { IGameContext } from "../../logic/Game/context";

const Main: React.FC = () => {
  const [gameState, setGameState] = React.useState<IGame>(Game.createDefault());

  const values = { ...gameState, setGameState } as IGameContext;

  return (
    <div className="main">
      <GameContext.Provider value={values}>
        {values.gameStatus === GameStatus.Init && <GameMode />}
        {values.gameStatus !== GameStatus.Init && <GamePlay />}
      </GameContext.Provider>
    </div>
  );
};

export default Main;
