import { ConsoleType } from "../../console";
import { GameResult } from "../../result/model";
import { GameStatus } from "./game-status-enum";

export interface GameState {
  gameStatus: GameStatus;
  wins: number;
  lose: number;
  result: GameResult;
  isPlaying: boolean;
  userInput: ConsoleType;
  computerInput: ConsoleType;
}
