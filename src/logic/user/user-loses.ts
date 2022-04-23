import { ConsoleType } from "../console/model";

export interface UserLose {
  [key: string]: ConsoleType;
}

export const userLoses: UserLose = {
  [ConsoleType.Rock]: ConsoleType.Paper,
  [ConsoleType.Scissors]: ConsoleType.Rock,
  [ConsoleType.Paper]: ConsoleType.Scissors,
};
