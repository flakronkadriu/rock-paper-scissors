import { ConsoleType, consoleTypes } from "../console";
import { GameResult } from "../result/model";
import { userLoses } from "../user";
import { GameStatus, GameState } from "./model";

export class Game {
  static createDefault(): GameState {
    return {
      wins: 0,
      lose: 0,
      isPlaying: false,
      gameStatus: GameStatus.Init,
      result: GameResult.Draw,
      userInput: ConsoleType.Paper,
      computerInput: ConsoleType.Rock,
    };
  }

  static create(raw: GameState): GameState {
    return {
      ...raw,
    };
  }

  static getRandomConsole(): ConsoleType {
    return consoleTypes[Math.floor(Math.random() * consoleTypes.length)];
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

  static getSelectionResult(
    userInput: ConsoleType,
    computerInput: ConsoleType
  ): GameResult {
    if (userInput === computerInput) return GameResult.Draw;
    if (userLoses[userInput] === computerInput) return GameResult.Lose;
    return GameResult.Win;
  }

  static getStateFromResult(state: GameState, result: GameResult) {
    switch (result) {
      case GameResult.Win:
        return {
          ...this.incrementWins(state),
          isPlaying: false,
          result,
        };
      case GameResult.Lose:
        return {
          ...this.incrementLose(state),
          isPlaying: false,
          result,
        };
      default:
        return { ...state, isPlaying: false, result };
    }
  }

  static userSelection(state: GameState, userInput: ConsoleType): GameState {
    const computerInput = this.getRandomConsole();
    const result = this.getSelectionResult(userInput, computerInput);
    const newState = {
      ...state,
      userInput,
      computerInput,
    };

    return this.getStateFromResult(newState, result);
  }

  static computerSelection(state: GameState): GameState {
    const userInput = this.getRandomConsole();

    return this.userSelection(state, userInput);
  }
}
