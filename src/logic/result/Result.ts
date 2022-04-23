import { ResultEnum } from "./model";

export class Result {
  static getResultMessage(value: ResultEnum) {
    switch (value) {
      case ResultEnum.Draw:
        return "DRAW!";
      case ResultEnum.Lose:
        return "You LOST!";
      case ResultEnum.Win:
        return "You WON!";
    }
  }
}
