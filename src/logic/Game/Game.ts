import { ConsoleType, consoleTypes } from "../Console/model";
import { ResultEnum } from "../Result/model";
import { GameStatus, userLoses } from "./model";
import { IGame } from "./model/game-interface";

export class Game {
  static createDefault(): IGame {
    return {
      wins: 0,
      lose: 0,
      isPlaying: false,
      gameStatus: GameStatus.Init,
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
      gameStatus: state.wins + 1 === 10 ? GameStatus.End : state.gameStatus,
    };
  }

  static incrementLose(state: IGame): IGame {
    return {
      ...state,
      lose: state.lose + 1,
      gameStatus: state.lose + 1 === 10 ? GameStatus.End : state.gameStatus,
    };
  }

  static setIsPlaying(state: IGame, isPlaying: boolean): IGame {
    return {
      ...state,
      isPlaying,
    };
  }

  static setGameStatus(state: IGame, gameStatus: GameStatus): IGame {
    return {
      ...state,
      gameStatus,
      isPlaying: gameStatus === GameStatus.Started,
    };
  }

  static userSelection(state: IGame, userInput: ConsoleType): IGame {
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

  static computerSelection(state: IGame): IGame {
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
