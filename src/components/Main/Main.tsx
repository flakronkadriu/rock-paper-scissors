import React from "react";
import GameMode from "../GameMode/GameMode";
import Game from "../Game/Game";

import "./Main.scss";

const Main: React.FC = () => (
  <div className="main">
    {/* <GameMode /> */}
    <Game />
  </div>
);

export default Main;
