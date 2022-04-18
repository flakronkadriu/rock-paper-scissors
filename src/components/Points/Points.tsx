import React from "react";
import { PointsProps } from "../../logic/Points/model";

import "./Points.scss";

const Points: React.FunctionComponent<PointsProps> = ({ title, score }) => (
  <div className="points">
    <small className="points__small">{title}</small>
    <p className="points__p">{score}</p>
  </div>
);

export default Points;