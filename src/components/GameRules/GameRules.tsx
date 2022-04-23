import React from "react";

import Picture from "../base/Picture/Picture";
import GameRulesImg from "../../asserts/game-rules.png";
import CloseIcon from "../../asserts/icon-close.svg";
import Button from "../base/Button/Button";

import "./GameRules.scss";
import { ButtonMode } from "../../logic/button/model";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";
import { GameRulesProps } from "../../logic/game-rules/model";

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
    <div className={`overlay ${isOpen ? "visible" : ""}`}>
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

export default GameRules;
