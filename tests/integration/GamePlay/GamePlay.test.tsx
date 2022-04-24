import React from "react";
import { cleanup, fireEvent, screen } from "@testing-library/react";
import { GamePlay, GameStateExtended } from "../../../src/components/GamePlay";
import { Game } from "../../../src/logic/game/Game";
import { GameState, GameStatus } from "../../../src/logic/game/model";
import { renderWithGameContext } from "../../fixture/renderWithGameContext";

afterEach(cleanup);

describe("GamePlay component", () => {
  it("should render game play on started state", () => {
    const setGameState = jest.fn();

    const gameState = Game.setGameStatus(
      Game.createDefault(),
      GameStatus.Started
    );

    const providerValue = { ...gameState, setGameState } as GameStateExtended;

    renderWithGameContext(<GamePlay />, providerValue);

    expect(screen.getByTestId("game-play")).not.toBeNull();
    expect(screen.getByTestId("game-selection")).not.toBeNull();
  });

  it("should display results on user selection", () => {
    const gameState = Game.setGameStatus(
      Game.createDefault(),
      GameStatus.Started
    );
    let gameResult: GameState = Game.createDefault();

    const setGameState = jest
      .fn()
      .mockImplementation((args) => (gameResult = args));

    let providerValue = { ...gameState, setGameState } as GameStateExtended;

    renderWithGameContext(<GamePlay />, providerValue);

    const gameConsole = screen.getAllByTestId("console")[0];

    fireEvent.click(gameConsole);

    expect(setGameState).toHaveBeenCalledWith(
      expect.objectContaining(gameResult)
    );

    providerValue = { ...gameResult, setGameState } as GameStateExtended;

    cleanup();

    renderWithGameContext(<GamePlay />, providerValue);

    const resultSelectionContainer = screen.getByTestId("result-selection");
    const userInput = screen.getByTestId("result-selection-user");
    const computerInput = screen.getByTestId("result-selection-computer");
    const wins = screen.getByTestId("points-count-wins");
    const lose = screen.getByTestId("points-count-lose");

    expect(screen.getByTestId("game-results")).not.toBeNull();
    expect(resultSelectionContainer).not.toBeNull();
    expect(userInput.hasChildNodes()).toBeTruthy();
    expect(computerInput.hasChildNodes()).toBeTruthy();
    expect(wins.textContent).toBe(String(gameResult.wins));
    expect(lose.textContent).toBe(String(gameResult.lose));
  });
});
