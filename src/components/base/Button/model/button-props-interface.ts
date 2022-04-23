import { ReactNode } from "react";
import { ButtonMode } from "./button-mode-enum";
import { ButtonSize } from "./button-size-enum";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonMode;
  size?: ButtonSize;
  children?: ReactNode;
}
