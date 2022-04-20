import React from "react";
import GameMode from "../GameMode/GameMode";
import GameComponent from "../Game/Game";

import "./Main.scss";
import { GameContext } from "../../logic/Game/context/GameContext";
import { Game } from "../../logic/Game/Game";

const Main: React.FC = () => (
  <div className="main">
    {/* <GameMode /> */}
    <GameContext.Provider value={Game.createDefault()}>
      <GameComponent />
    </GameContext.Provider>
  </div>
);

export default Main;
