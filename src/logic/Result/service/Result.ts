import { ResultEnum } from "../model/result-enum";

export class Result {
  static getResultMessage(value: ResultEnum) {
    switch (value) {
      case ResultEnum.DRAW:
        return "DRAW!";
      case ResultEnum.LOST:
        return "You LOST!";
      case ResultEnum.WIN:
        return "You WON!";
    }
  }
}
