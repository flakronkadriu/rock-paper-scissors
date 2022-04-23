import React from "react";
import GameMode from "../GameMode/GameMode";
import GamePlay from "../GamePlay/GamePlay";

import "./Main.scss";
import { GameContext } from "../../logic/game/context/game-context";
import { Game } from "../../logic/game/Game";
import { GameStatus, GameState } from "../../logic/game/model";
import { GameStateContext } from "../../logic/game/context";
import GameRules from "../GameRules/GameRules";

const Main: React.FC = () => {
  const [gameState, setGameState] = React.useState<GameState>(
    Game.createDefault()
  );
  const [isOpen, setIsOpen] = React.useState(false);

  const openModalHandler = () => setIsOpen(true);
  const closeModalHandler = () => setIsOpen(false);

  const values = { ...gameState, setGameState } as GameStateContext;

  return (
    <div className="main">
      <GameContext.Provider value={values}>
        {values.gameStatus === GameStatus.Init && (
          <GameMode openModal={openModalHandler} />
        )}
        {values.gameStatus !== GameStatus.Init && <GamePlay />}
      </GameContext.Provider>
      <GameRules isOpen={isOpen} closeModal={closeModalHandler} />
    </div>
  );
};

export default Main;
