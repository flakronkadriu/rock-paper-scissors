import React from "react";
import {
  ButtonMode,
  ButtonProps,
  ButtonSize,
} from "../../../logic/Button/model";

import "./Button.scss";

const defaultProps: Partial<ButtonProps> = {
  mode: ButtonMode.Primary,
  size: ButtonSize.Small,
};

const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  mode,
  size,
  ...props
}) => (
  <button {...props} className={`btn btn__mode--${mode} btn__size--${size}`}>
    {children}
  </button>
);

Button.defaultProps = defaultProps;

export default Button;
