import { Dimensions } from "react-native";

export const { height: screenHeight, width: screenWidth } =
  Dimensions.get("screen");

export const { height: windowHeight, width: windowWidth } =
  Dimensions.get("window");

export const isWidthSmall = screenWidth < 400;
export const isHeightSmall = screenHeight < 650;
