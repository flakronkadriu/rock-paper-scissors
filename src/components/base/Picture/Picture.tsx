import React from "react";
import { ImageFit, PictureProps } from "../../../logic/picture/model";

import "./Picture.scss";

const defaultProps: Partial<PictureProps> = {
  imageFit: ImageFit.Cover,
};

const Picture: React.FunctionComponent<PictureProps> = ({
  src,
  width,
  height,
  imageFit,
  alt,
}) => (
  <img
    className={`img img__fit--${imageFit}`}
    src={src}
    width={width}
    height={height}
    alt={alt}
  />
);

Picture.defaultProps = defaultProps;

export default Picture;
