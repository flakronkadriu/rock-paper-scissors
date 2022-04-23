import { ConsoleType } from "../../console/model";
import { ResultEnum } from "../../result/model";
import { GameStatus } from "./game-status-enum";

export interface GameStateBase {
  gameStatus: GameStatus;
  wins: number;
  lose: number;
  result: ResultEnum;
  isPlaying: boolean;
  userInput: ConsoleType;
  computerInput: ConsoleType;
}
