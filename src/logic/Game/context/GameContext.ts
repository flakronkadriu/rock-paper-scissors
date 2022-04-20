import React from "react";
import { Game } from "../Game";
import { IGame } from "../model/game-interface";

export const GameContext = React.createContext<IGame>(Game.createDefault());
