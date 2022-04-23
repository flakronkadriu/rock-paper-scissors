import { noop } from "lodash";
import React from "react";
import { Game } from "../Game";
import { GameStateContext } from "./game-context-interface";

export const GameContext = React.createContext<GameStateContext>({
  ...Game.createDefault(),
  setGameState: noop,
});
