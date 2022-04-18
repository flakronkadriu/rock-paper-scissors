import React from "react";
import { ButtonSize } from "../../logic/Button/model";
import Button from "../base/Button/Button";

import "./GameMode.scss";

const GameMode: React.FunctionComponent = () => (
  <div className="game-mode">
    <div className="game-mode__wrapper">
      <div className="game-mode__content">
        <div className="content__headline">
          <h1>Choose game mode</h1>
        </div>
        <div className="content__btn_player">
          <Button size={ButtonSize.Medium}>Play against Computer</Button>
        </div>
        <Button size={ButtonSize.Medium}>Computer vs Computer</Button>
      </div>
    </div>
  </div>
);

export default GameMode;
