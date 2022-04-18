import React from "react";
import { ConsoleProps } from "../../logic/Console/model";
import Picture from "../base/Picture/Picture";

import "./Console.scss";

const Console: React.FunctionComponent<ConsoleProps> = ({ type, image }) => (
  <div className="console">
    <Picture src={image} width={100} height={100} />
  </div>
);

export default Console;
