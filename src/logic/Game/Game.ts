import { ConsoleType } from "../Console/model";
import { ResultEnum } from "../Result/model";

export class Game {
  wins: number;
  lose: number;
  isPlaying: boolean;
  userLoses: Map<ConsoleType, ConsoleType>;

  constructor() {
    this.wins = 0;
    this.lose = 0;
    this.isPlaying = false;
    this.userLoses = new Map();
    this.userLoses.set(ConsoleType.Rock, ConsoleType.Paper);
    this.userLoses.set(ConsoleType.Scissors, ConsoleType.Rock);
    this.userLoses.set(ConsoleType.Paper, ConsoleType.Scissors);
  }

  static getRandomConsole() {
    return ConsoleType[Math.floor(Math.random() * 3)];
  }

  getGameResult(userInput: ConsoleType, computerInput: ConsoleType) {
    if (userInput === computerInput) return ResultEnum.DRAW;
    if (this.userLoses.get(userInput) === computerInput) return ResultEnum.LOST;
    return ResultEnum.WIN;
  }
}
