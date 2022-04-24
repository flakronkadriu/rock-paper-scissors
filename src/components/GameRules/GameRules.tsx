import React from "react";

import GameRulesImg from "../../assets/game-rules.png";
import CloseIcon from "../../assets/icon-close.svg";
import { Button, ButtonMode } from "../base/Button";
import { Picture } from "../base/Picture";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";
import { GameRulesProps } from "./model";

import "./GameRules.scss";

type Props = GameRulesProps;

const GameRules: React.FunctionComponent<Props> = ({ isOpen, closeModal }) => {
  const isSmall = useMediaQuerySmall();
  const isRetina = useMediaQueryRetina();

  const getHeight = () => {
    if (isSmall) return 250;
    if (isRetina) return 260;
    return 300;
  };

  return (
    <div
      className={`overlay ${isOpen ? "visible" : ""}`}
      data-testid="game-rules-modal"
    >
      <div className="modal">
        <h2>Rules</h2>
        <div className="close">
          <Button mode={ButtonMode.Secondary} onClick={closeModal}>
            <Picture src={CloseIcon} height={20} alt="Close game rules" />
          </Button>
        </div>
        <div className="content">
          <Picture src={GameRulesImg} height={getHeight()} />
        </div>
      </div>
    </div>
  );
};

export { GameRules };
