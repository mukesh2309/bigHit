import { Dimensions, Platform, StyleSheet } from "react-native";

const { height } = Dimensions.get("screen");

export default StyleSheet.create({
  Button: {
    backgroundColor: "black",
    height: height > 650 ? 45 : 40,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22.5,
  },
  ButtonText: {
    color: "white",
    fontSize: 15,
  },
});
