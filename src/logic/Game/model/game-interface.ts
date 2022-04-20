import { ConsoleType } from "../../Console/model";
import { ResultEnum } from "../../Result/model";
import { GameStatus } from "./game-status-enum";

export interface IGame {
  gameStatus: GameStatus;
  wins: number;
  lose: number;
  result: ResultEnum;
  isPlaying: boolean;
  userInput: ConsoleType;
  computerInput: ConsoleType;
}
