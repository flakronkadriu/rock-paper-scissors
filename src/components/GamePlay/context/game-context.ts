import { noop } from "lodash";
import React from "react";
import { Game } from "../../../logic/game/Game";
import { GameStateExtended } from "./game-state-context-interface";

export const GameStateContext = React.createContext<GameStateExtended>({
  ...Game.createDefault(),
  setGameState: noop,
});
