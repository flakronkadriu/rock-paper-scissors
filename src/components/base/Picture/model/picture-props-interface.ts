import { ImageFit } from "./image-fit-enum";

export interface PictureProps {
  src: string;
  height?: string | number;
  width?: string | number;
  imageFit?: ImageFit;
  alt?: string;
}
