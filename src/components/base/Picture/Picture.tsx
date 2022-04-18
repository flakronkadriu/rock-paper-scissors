import React from "react";
import { ImageFit, PictureProps } from "../../../logic/Picture/model";

import "./Picture.scss";

const defaultProps: Partial<PictureProps> = {
  imageFit: ImageFit.Cover,
};

const Picture: React.FunctionComponent<PictureProps> = ({
  src,
  width,
  height,
  imageFit,
}) => (
  <img
    className={`img img__fit--${imageFit}`}
    src={src}
    width={width}
    height={height}
  />
);

Picture.defaultProps = defaultProps;

export default Picture;
