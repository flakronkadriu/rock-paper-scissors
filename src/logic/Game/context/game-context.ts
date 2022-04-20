import { noop } from "lodash";
import React from "react";
import { Game } from "../Game";
import { IGameContext } from "./game-context-interface";

export const GameContext = React.createContext<IGameContext>({
  ...Game.createDefault(),
  setGameState: noop,
});
