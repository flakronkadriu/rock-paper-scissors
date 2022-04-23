import React from "react";

import GameRulesImg from "../../asserts/game-rules.png";
import CloseIcon from "../../asserts/icon-close.svg";
import { Button, Picture } from "../base";
import { ButtonMode } from "../base/Button";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";
import { GameRulesProps } from "../../logic/game-rules/model";

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
