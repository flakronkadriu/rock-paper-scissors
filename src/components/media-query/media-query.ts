import { useMediaQuery as useMediaQueryDefault } from "react-responsive";

export const useMediaQuerySmall = () => {
  return useMediaQueryDefault({
    maxWidth: 1224,
  });
};

export const useMediaQueryLarge = () => {
  return useMediaQueryDefault({
    minWidth: 1224,
  });
};

export const useMediaQueryRetina = () => {
  return useMediaQueryDefault({
    minResolution: "2dppx",
  });
};
