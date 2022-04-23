import React from "react";

import { GameMode } from "../GameMode";
import { GamePlay } from "../GamePlay";
import { Game } from "../../logic/game/Game";
import { GameStatus, GameState } from "../../logic/game/model";
import { GameStateContext, GameStateExtended } from "../GamePlay/context";
import { GameRules } from "../GameRules/GameRules";

import "./Main.scss";

const Main: React.FC = () => {
  const [gameState, setGameState] = React.useState<GameState>(
    Game.createDefault()
  );
  const [isOpen, setIsOpen] = React.useState(false);

  const openModalHandler = () => setIsOpen(true);
  const closeModalHandler = () => setIsOpen(false);

  const values = { ...gameState, setGameState } as GameStateExtended;

  return (
    <div className="main">
      <GameStateContext.Provider value={values}>
        {values.gameStatus === GameStatus.Init && (
          <GameMode openModal={openModalHandler} />
        )}
        {values.gameStatus !== GameStatus.Init && <GamePlay />}
      </GameStateContext.Provider>
      <GameRules isOpen={isOpen} closeModal={closeModalHandler} />
    </div>
  );
};

export { Main };
