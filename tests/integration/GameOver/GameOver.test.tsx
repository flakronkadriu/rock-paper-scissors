import { cleanup, fireEvent, screen } from "@testing-library/react";
import React from "react";
import { GameOver } from "../../../src/components/GameOver";
import { GameStateExtended } from "../../../src/components/GamePlay";
import { Game } from "../../../src/logic/game/Game";
import { GameStatus } from "../../../src/logic/game/model";
import { renderWithGameContext } from "../../fixture/renderWithGameContext";

afterEach(cleanup);

describe("GameOver component", () => {
  it("renders GameOver component", () => {
    const setGameState = jest.fn();

    const gameState = Game.setGameStatus(Game.createDefault(), GameStatus.End);

    const providerValue = { ...gameState, setGameState } as GameStateExtended;

    renderWithGameContext(<GameOver />, providerValue);

    expect(screen.getByTestId("game-over")).not.toBeNull();
  });

  it("renders winner message", () => {
    const setGameState = jest.fn();

    const gameState = Game.create({
      ...Game.createDefault(),
      wins: 10,
      gameStatus: GameStatus.End,
    });

    const providerValue = { ...gameState, setGameState } as GameStateExtended;

    renderWithGameContext(<GameOver />, providerValue);

    expect(screen.getByText(/WON/)).not.toBeNull();
  });

  it("renders lost message", () => {
    const setGameState = jest.fn();

    const gameState = Game.create({
      ...Game.createDefault(),
      lose: 10,
      gameStatus: GameStatus.End,
    });

    const providerValue = { ...gameState, setGameState } as GameStateExtended;

    renderWithGameContext(<GameOver />, providerValue);

    expect(screen.getByText(/LOST/)).not.toBeNull();
  });

  it("restarts game on play again", () => {
    const gameState = Game.create({
      ...Game.createDefault(),
      lose: 10,
      gameStatus: GameStatus.End,
    });

    const setGameState = jest.fn();

    const providerValue = { ...gameState, setGameState } as GameStateExtended;

    renderWithGameContext(<GameOver />, providerValue);

    const playAgainBtn = screen.getByTestId("play-again");

    fireEvent.click(playAgainBtn);

    expect(setGameState).toHaveBeenCalledWith(
      expect.objectContaining(Game.playAgain())
    );
  });
});
