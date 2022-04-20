import { ConsoleType, consoleTypes } from "../Console/model";
import { ResultEnum } from "../Result/model";
import { GameStatus, userLoses } from "./model";
import { IGame } from "./model/game-interface";

export class Game {
  static createDefault(): IGame {
    return {
      wins: 0,
      lose: 0,
      isPlaying: true,
      gameStatus: GameStatus.INIT,
      result: ResultEnum.DRAW,
      userInput: ConsoleType.Paper,
      computerInput: ConsoleType.Rock,
    };
  }

  static getRandomConsole(): ConsoleType {
    return consoleTypes[Math.floor(Math.random() * 3)];
  }

  static incrementWins(state: IGame): IGame {
    return {
      ...state,
      wins: state.wins + 1,
    };
  }

  static incrementLose(state: IGame): IGame {
    return {
      ...state,
      lose: state.lose + 1,
    };
  }

  static setIsPlaying(state: IGame, isPlaying: boolean): IGame {
    return {
      ...state,
      isPlaying,
    };
  }

  static userChoose(state: IGame, userInput: ConsoleType): IGame {
    const computerInput = this.getRandomConsole();
    const result = this.getSelectionResult(userInput, computerInput);
    const newState = {
      ...state,
      isPlaying: false,
      result,
      userInput,
      computerInput,
    };

    return this.getStateFromResult(newState, result);
  }

  static computerChoose(state: IGame): IGame {
    const userInput = this.getRandomConsole();
    const computerInput = this.getRandomConsole();
    const result = this.getSelectionResult(userInput, computerInput);
    const newState = {
      ...state,
      isPlaying: false,
      result,
      userInput,
      computerInput,
    };

    return this.getStateFromResult(newState, result);
  }

  static getSelectionResult(
    userInput: ConsoleType,
    computerInput: ConsoleType
  ): ResultEnum {
    if (userInput === computerInput) return ResultEnum.DRAW;
    if (userLoses[userInput] === computerInput) return ResultEnum.LOST;
    return ResultEnum.WIN;
  }

  static getStateFromResult(state: IGame, result: ResultEnum) {
    switch (result) {
      case ResultEnum.WIN:
        return this.incrementWins(state);
      case ResultEnum.LOST:
        return this.incrementLose(state);
      default:
        return state;
    }
  }
}
