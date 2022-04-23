import { ConsoleType } from "../../console";
import { ResultEnum } from "../../result/model";
import { GameStatus } from "./game-status-enum";

export interface GameState {
  gameStatus: GameStatus;
  wins: number;
  lose: number;
  result: ResultEnum;
  isPlaying: boolean;
  userInput: ConsoleType;
  computerInput: ConsoleType;
}
