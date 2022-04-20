import React from "react";
import { GameContext } from "../../logic/Game/context/GameContext";
import { IGame } from "../../logic/Game/model";

export const withGameContext = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof IGame>> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const GameComponent = (componentProps: Omit<P, keyof IGame>) => {
    const values = React.useContext<IGame>(GameContext);

    const props = { ...componentProps, ...values };

    return <WrappedComponent {...(props as P)} />;
  };

  GameComponent.displayName = displayName;
  return GameComponent;
};
