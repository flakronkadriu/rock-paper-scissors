import { GameResult } from "./model";

export class Result {
  static getResultMessage(value: GameResult) {
    switch (value) {
      case GameResult.Draw:
        return "DRAW!";
      case GameResult.Lose:
        return "You LOST!";
      case GameResult.Win:
        return "You WON!";
    }
  }
}
