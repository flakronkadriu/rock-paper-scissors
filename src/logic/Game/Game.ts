import { ConsoleType, consoleTypes } from "../Console/model";
import { ResultEnum } from "../Result/model";
import { userLoses } from "./model";
import { IGame } from "./model/game-interface";

export class Game {
  wins: number;
  lose: number;
  isPlaying: boolean;

  constructor(raw: IGame) {
    this.wins = raw.wins;
    this.lose = raw.lose;
    this.isPlaying = raw.isPlaying;
  }

  static createDefault(): IGame {
    return {
      wins: 0,
      lose: 0,
      isPlaying: false,
    };
  }

  static getRandomConsole(): ConsoleType {
    return consoleTypes[Math.floor(Math.random() * 3)];
  }

  static getGameResult(
    userInput: ConsoleType,
    computerInput: ConsoleType
  ): ResultEnum {
    if (userInput === computerInput) return ResultEnum.DRAW;
    if (userLoses[userInput] === computerInput) return ResultEnum.LOST;
    return ResultEnum.WIN;
  }
}
