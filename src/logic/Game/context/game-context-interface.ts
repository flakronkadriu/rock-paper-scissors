import { GameState } from "../model";

export interface GameStateContext extends GameState {
  setGameState: (newState: GameState) => void;
}
