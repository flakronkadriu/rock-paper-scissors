import { IGame } from "../model";

export interface IGameContext extends IGame {
  setGameState: (newState: IGame) => void;
}
