import React from "react";
import {
  GameStateContext,
  GameStateExtended,
} from "../../components/GamePlay/context";

export const withGameStateContext = <P extends object>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof GameStateExtended>> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const GameComponent = (componentProps: Omit<P, keyof GameStateExtended>) => {
    const values = React.useContext<GameStateExtended>(GameStateContext);

    const props = { ...componentProps, ...values };

    return <WrappedComponent {...(props as P)} />;
  };

  GameComponent.displayName = displayName;
  return GameComponent;
};
