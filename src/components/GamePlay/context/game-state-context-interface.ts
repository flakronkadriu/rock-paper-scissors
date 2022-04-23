import { GameState } from "../../../logic/game/model";

export interface GameStateExtended extends GameState {
  setGameState: (newState: GameState) => void;
}
