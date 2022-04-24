import { render } from "@testing-library/react";
import React, { ReactNode } from "react";
import { GameStateContext } from "../../src/components/GamePlay";
import { GameStateExtended } from "../../src/components/GamePlay";

export const renderWithGameContext = (
  ui: ReactNode,
  value: GameStateExtended
) => {
  return render(
    <GameStateContext.Provider value={value}>{ui}</GameStateContext.Provider>
  );
};
