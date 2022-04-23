import { ConsoleType } from "../../console/model";

export interface IUserLoses {
  [key: string]: ConsoleType;
}

export const userLoses: IUserLoses = {
  [ConsoleType.Rock]: ConsoleType.Paper,
  [ConsoleType.Scissors]: ConsoleType.Rock,
  [ConsoleType.Paper]: ConsoleType.Scissors,
};
