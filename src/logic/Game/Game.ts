import { ConsoleType, consoleTypes } from "../console";
import { ResultEnum } from "../result/model";
import { userLoses } from "../user";
import { GameStatus, GameState } from "./model";

export class Game {
  static createDefault(): GameState {
    return {
      wins: 0,
      lose: 0,
      isPlaying: false,
      gameStatus: GameStatus.Init,
      result: ResultEnum.Draw,
      userInput: ConsoleType.Paper,
      computerInput: ConsoleType.Rock,
    };
  }

  static create(raw: GameState): GameState {
    return {
      ...raw,
    };
  }

  static getRandomConsole(max = consoleTypes.length): ConsoleType {
    return consoleTypes[Math.floor(Math.random() * max)];
  }

  static incrementWins(state: GameState): GameState {
    return {
      ...state,
      wins: state.wins + 1,
      gameStatus: state.wins + 1 === 10 ? GameStatus.End : state.gameStatus,
    };
  }

  static incrementLose(state: GameState): GameState {
    return {
      ...state,
      lose: state.lose + 1,
      gameStatus: state.lose + 1 === 10 ? GameStatus.End : state.gameStatus,
    };
  }

  static setIsPlaying(state: GameState, isPlaying: boolean): GameState {
    return {
      ...state,
      isPlaying,
    };
  }

  static setGameStatus(state: GameState, gameStatus: GameStatus): GameState {
    return {
      ...state,
      gameStatus,
      isPlaying: gameStatus === GameStatus.Started,
    };
  }

  static playAgain() {
    return this.create({
      ...this.createDefault(),
      isPlaying: true,
      gameStatus: GameStatus.Started,
    });
  }

  static userSelection(state: GameState, userInput: ConsoleType): GameState {
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

  static computerSelection(state: GameState): GameState {
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
    if (userInput === computerInput) return ResultEnum.Draw;
    if (userLoses[userInput] === computerInput) return ResultEnum.Lose;
    return ResultEnum.Win;
  }

  static getStateFromResult(state: GameState, result: ResultEnum) {
    switch (result) {
      case ResultEnum.Win:
        return this.incrementWins(state);
      case ResultEnum.Lose:
        return this.incrementLose(state);
      default:
        return state;
    }
  }
}
