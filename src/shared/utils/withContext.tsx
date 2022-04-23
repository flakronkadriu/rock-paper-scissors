import React from "react";
import { GameStateContext } from "../../logic/game/context";
import { GameContext } from "../../logic/game/context/game-context";

export const withGameContext = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof GameStateContext>> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const GameComponent = (componentProps: Omit<P, keyof GameStateContext>) => {
    const values = React.useContext<GameStateContext>(GameContext);

    const props = { ...componentProps, ...values };

    return <WrappedComponent {...(props as P)} />;
  };

  GameComponent.displayName = displayName;
  return GameComponent;
};
