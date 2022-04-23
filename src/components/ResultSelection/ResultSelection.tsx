import React from "react";

import { Picture } from "../base/Picture";
import { ResultSelectionProps } from "./model";
import { ConsoleType } from "../../logic/console";
import Rock from "../../asserts/rock.png";
import Paper from "../../asserts/paper.png";
import Scissors from "../../asserts/scissors.png";
import { useMediaQuerySmall } from "../media-query";
import { useMediaQueryRetina } from "../media-query/media-query";

import "./ResultSelection.scss";
import { withGameStateContext } from "../../shared/utils/withContext";
import { GameState } from "../../logic/game/model";

const resultToImage = {
  [ConsoleType.Paper]: Paper,
  [ConsoleType.Rock]: Rock,
  [ConsoleType.Scissors]: Scissors,
};

type Props = ResultSelectionProps & GameState;

const ResultSelection: React.FunctionComponent<Props> = ({
  userInput,
  computerInput,
  result,
}) => {
  const isSmall = useMediaQuerySmall();
  const isRetina = useMediaQueryRetina();

  const getHeight = () => {
    if (isSmall) return 80;
    if (isRetina) return 100;
    return 150;
  };

  return (
    <div className="result-selection">
      <table>
        <tr>
          <th>You</th>
          <th></th>
          <th>Computer</th>
        </tr>
        <tr>
          <td>
            <Picture src={resultToImage[userInput]} height={getHeight()} />
          </td>
          <td className={`result-selection__title result--${result}`}>
            {result}
          </td>
          <td>
            <Picture src={resultToImage[computerInput]} height={getHeight()} />
          </td>
        </tr>
      </table>
    </div>
  );
};

export const ResultSelectionEnhanced = withGameStateContext(ResultSelection);
