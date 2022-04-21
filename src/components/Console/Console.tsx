import React from "react";
import { ConsoleProps } from "../../logic/Console/model";
import { IGameContext } from "../../logic/Game/context";
import { Game } from "../../logic/Game/Game";
import { withGameContext } from "../../shared/utils/withContext";
import Picture from "../base/Picture/Picture";
import { useMediaQuerySmall } from "../media-query";

import "./Console.scss";

type Props = ConsoleProps & IGameContext;

const Console: React.FunctionComponent<Props> = ({ type, image, ...props }) => {
  const isSmall = useMediaQuerySmall();

  return (
    <div
      className="console"
      onClick={() => props.setGameState(Game.userSelection(props, type))}
    >
      <Picture src={image} height={isSmall ? 50 : 100} />
    </div>
  );
};

export default withGameContext(Console);
