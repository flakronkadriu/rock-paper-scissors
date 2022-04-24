import { ConsoleType, consoleTypes } from "../../../src/logic/console";
import { Game } from "../../../src/logic/game/Game";
import { GameStatus } from "../../../src/logic/game/model";
import { ResultEnum } from "../../../src/logic/result/model";

afterAll(() => {
  jest.restoreAllMocks();
});

describe("Game", () => {
  const state = Game.createDefault();

  describe("createDefault", () => {
    it("returns default state", () => {
      expect(state).toStrictEqual(
        expect.objectContaining({
          wins: 0,
          lose: 0,
          isPlaying: false,
          gameStatus: GameStatus.Init,
          result: ResultEnum.Draw,
          userInput: ConsoleType.Paper,
          computerInput: ConsoleType.Rock,
        })
      );
    });
  });

  describe("getRandomConsole", () => {
    it("returns random console from array of consoles", () => {
      const console = Game.getRandomConsole();

      expect(consoleTypes).toContain(console);
    });
  });

  describe("incrementWins", () => {
    it("returns incremented wins", () => {
      const newState = Game.incrementWins(state);

      expect(newState).toStrictEqual(
        expect.objectContaining({
          ...state,
          wins: state.wins + 1,
        })
      );
    });
  });

  describe("incrementLose", () => {
    it("returns incremented lose", () => {
      const newState = Game.incrementLose(state);

      expect(newState).toStrictEqual(
        expect.objectContaining({
          ...state,
          lose: state.lose + 1,
        })
      );
    });
  });

  describe("setIsPlaying", () => {
    it("returns isPlaying true", () => {
      const newState = Game.setIsPlaying(state, true);

      expect(newState).toStrictEqual(
        expect.objectContaining({
          ...state,
          isPlaying: true,
        })
      );
    });

    it("returns isPlaying false", () => {
      const newState = Game.setIsPlaying(state, false);

      expect(newState).toStrictEqual(
        expect.objectContaining({
          ...state,
          isPlaying: false,
        })
      );
    });
  });

  describe("setGameStatus", () => {
    it("returns updated game status", () => {
      const newState = Game.setGameStatus(state, GameStatus.End);

      expect(newState).toStrictEqual(
        expect.objectContaining({
          ...state,
          gameStatus: GameStatus.End,
        })
      );
    });

    it("updates isPlaying if gameStatus is Started", () => {
      const newState = Game.setGameStatus(
        {
          ...state,
          isPlaying: false,
        },
        GameStatus.Started
      );

      expect(newState).toStrictEqual(
        expect.objectContaining({
          ...state,
          gameStatus: GameStatus.Started,
          isPlaying: true,
        })
      );
    });
  });

  describe("playAgain", () => {
    it("returns new game state", () => {
      const values = Game.playAgain();

      expect(values).toStrictEqual(
        expect.objectContaining({
          ...state,
          isPlaying: true,
          gameStatus: GameStatus.Started,
        })
      );
    });
  });

  describe("userSelection", () => {
    it("returns win", () => {
      const userInput = ConsoleType.Paper;
      const computerInput = ConsoleType.Rock;

      jest
        .spyOn(Game, "getRandomConsole")
        .mockImplementation(() => computerInput);

      const result = Game.userSelection(state, userInput);

      expect(result).toStrictEqual(
        expect.objectContaining({
          ...state,
          userInput,
          computerInput,
          isPlaying: false,
          result: ResultEnum.Win,
          wins: state.wins + 1,
        })
      );
    });

    it("returns lost", () => {
      const userInput = ConsoleType.Paper;
      const computerInput = ConsoleType.Scissors;

      jest
        .spyOn(Game, "getRandomConsole")
        .mockImplementation(() => computerInput);

      const result = Game.userSelection(state, userInput);

      expect(result).toStrictEqual(
        expect.objectContaining({
          ...state,
          userInput,
          computerInput,
          isPlaying: false,
          result: ResultEnum.Lose,
          lose: state.lose + 1,
        })
      );
    });

    it("returns draw", () => {
      const userInput = ConsoleType.Paper;
      const computerInput = ConsoleType.Paper;

      jest
        .spyOn(Game, "getRandomConsole")
        .mockImplementation(() => computerInput);

      const result = Game.userSelection(state, userInput);

      expect(result).toStrictEqual(
        expect.objectContaining({
          ...state,
          userInput,
          computerInput,
          isPlaying: false,
          result: ResultEnum.Draw,
        })
      );
    });
  });

  describe("computerSelection", () => {
    it("returns draw", () => {
      jest
        .spyOn(Game, "getRandomConsole")
        .mockImplementation(() => ConsoleType.Paper);

      const result = Game.computerSelection(state);

      expect(result).toStrictEqual(
        expect.objectContaining({
          ...state,
          userInput: ConsoleType.Paper,
          computerInput: ConsoleType.Paper,
          isPlaying: false,
          result: ResultEnum.Draw,
        })
      );
    });
  });

  describe("getSelectionResult", () => {
    it("returns draw if equal", () => {
      const userInput = ConsoleType.Paper;
      const computerInput = ConsoleType.Paper;

      expect(Game.getSelectionResult(userInput, computerInput)).toStrictEqual(
        ResultEnum.Draw
      );
    });
    describe("user loses", () => {
      it("rock vs paper", () => {
        const userInput = ConsoleType.Rock;
        const computerInput = ConsoleType.Paper;

        expect(Game.getSelectionResult(userInput, computerInput)).toStrictEqual(
          ResultEnum.Lose
        );
      });

      it("scissors vs rock", () => {
        const userInput = ConsoleType.Scissors;
        const computerInput = ConsoleType.Rock;

        expect(Game.getSelectionResult(userInput, computerInput)).toStrictEqual(
          ResultEnum.Lose
        );
      });

      it("paper vs scissors", () => {
        const userInput = ConsoleType.Paper;
        const computerInput = ConsoleType.Scissors;

        expect(Game.getSelectionResult(userInput, computerInput)).toStrictEqual(
          ResultEnum.Lose
        );
      });
    });

    it("returns win", () => {
      const userInput = ConsoleType.Paper;
      const computerInput = ConsoleType.Rock;

      expect(Game.getSelectionResult(userInput, computerInput)).toStrictEqual(
        ResultEnum.Win
      );
    });
  });

  describe("getStateFromResult", () => {
    it("returns incremented wins if user wins", () => {
      const result = Game.getStateFromResult(state, ResultEnum.Win);

      expect(result).toStrictEqual(
        expect.objectContaining({
          ...state,
          isPlaying: false,
          wins: state.wins + 1,
          result: ResultEnum.Win,
        })
      );
    });

    it("returns incremented lose if user loses", () => {
      const result = Game.getStateFromResult(state, ResultEnum.Lose);

      expect(result).toStrictEqual(
        expect.objectContaining({
          ...state,
          isPlaying: false,
          lose: state.wins + 1,
          result: ResultEnum.Lose,
        })
      );
    });
  });
});
