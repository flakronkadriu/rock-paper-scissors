import React from "react";
import GameMode from "../GameMode/GameMode";
import GameComponent from "../Game/Game";

import "./Main.scss";
import { GameContext } from "../../logic/Game/context/game-context";
import { Game } from "../../logic/Game/Game";
import { IGame } from "../../logic/Game/model";
import { IGameContext } from "../../logic/Game/context";

const Main: React.FC = () => {
  const [gameState, setGameState] = React.useState<IGame>(Game.createDefault());

  const values = { ...gameState, setGameState } as IGameContext;

  return (
    <div className="main">
      {/* <GameMode /> */}
      <GameContext.Provider value={values}>
        <GameComponent />
      </GameContext.Provider>
    </div>
  );
};

export default Main;
