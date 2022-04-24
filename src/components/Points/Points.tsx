import React from "react";
import { PointsProps } from "./model";

import "./Points.scss";

const Points: React.FunctionComponent<PointsProps> = ({
  title,
  score,
  testId,
}) => (
  <div className="points" data-testid="points">
    <small className="points__small">{title}</small>
    <p
      className="points__p"
      data-testid={testId ? `points-count-${testId}` : "points-count"}
    >
      {score}
    </p>
  </div>
);

export { Points };
