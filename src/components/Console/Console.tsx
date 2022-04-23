import React from "react";
import { ConsoleProps } from "./model";
import { GameStateExtended } from "../GamePlay/context";
import { Game } from "../../logic/game/Game";
import { withGameStateContext } from "../../shared/utils/withContext";
import { Picture } from "../base/Picture";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";

import "./Console.scss";

type Props = ConsoleProps & GameStateExtended;

const Console: React.FunctionComponent<Props> = ({ type, image, ...props }) => {
  const isSmall = useMediaQuerySmall();
  const isRetina = useMediaQueryRetina();

  const getHeight = () => {
    if (isSmall) return 50;
    if (isRetina) return 60;
    return 100;
  };

  return (
    <div
      className="console"
      onClick={() => props.setGameState(Game.userSelection(props, type))}
    >
      <Picture src={image} height={getHeight()} />
    </div>
  );
};

export const ConsoleEnhanced = withGameStateContext(Console);
