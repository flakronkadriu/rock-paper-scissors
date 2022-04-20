import React from "react";
import { ConsoleProps } from "../../logic/Console/model";
import { IGameContext } from "../../logic/Game/context";
import { Game } from "../../logic/Game/Game";
import { withGameContext } from "../../shared/utils/withContext";
import Picture from "../base/Picture/Picture";

import "./Console.scss";

type Props = ConsoleProps & IGameContext;

const Console: React.FunctionComponent<Props> = ({ type, image, ...props }) => (
  <div
    className="console"
    onClick={() => props.setGameState(Game.userChoose(props, type))}
  >
    <Picture src={image} width={100} height={100} />
  </div>
);

export default withGameContext(Console);
