import React from "react";
import { IGameContext } from "../../logic/Game/context";
import { GameContext } from "../../logic/Game/context/game-context";

export const withGameContext = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof IGameContext>> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const GameComponent = (componentProps: Omit<P, keyof IGameContext>) => {
    const values = React.useContext<IGameContext>(GameContext);

    const props = { ...componentProps, ...values };

    return <WrappedComponent {...(props as P)} />;
  };

  GameComponent.displayName = displayName;
  return GameComponent;
};
