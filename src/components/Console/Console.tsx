import React from "react";
import { ConsoleProps } from "../../logic/console/model";
import { GameStateContext } from "../../logic/game/context";
import { Game } from "../../logic/game/Game";
import { withGameContext } from "../../shared/utils/withContext";
import Picture from "../base/Picture/Picture";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";

import "./Console.scss";

type Props = ConsoleProps & GameStateContext;

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

export default withGameContext(Console);
