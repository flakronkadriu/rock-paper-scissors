import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Main } from "../../../src/components/Main";

describe("Main component", () => {
  it("renders main component", () => {
    render(<Main />);

    expect(screen.getByTestId("main")).not.toBeNull();
  });

  it("renders Game mode", () => {
    render(<Main />);

    expect(screen.getByTestId("game-mode")).not.toBeNull();
  });

  it("starts game on play button click", () => {
    render(<Main />);

    const playButton = screen.getByTestId("game-mode-play-btn");

    if (playButton) {
      fireEvent.click(playButton);
    }

    const gamePlayContainer = screen.getByTestId("game-play");

    expect(gamePlayContainer).not.toBeNull();
  });

  it("opens rules modal on rules button click", () => {
    render(<Main />);

    const gameRulesBtn = screen.getByTestId("game-mode-rules-btn");

    if (gameRulesBtn) {
      fireEvent.click(gameRulesBtn);
    }

    const gameRulesModal = screen.getByTestId("game-rules-modal");

    expect(gameRulesModal).not.toBeNull();
  });
});
