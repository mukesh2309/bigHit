import { StyleSheet } from "react-native";
import {
  linkBlue,
  screenHeight,
  screenWidth,
  windowHeight,
} from "../../constants";

export default StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Inputs: {
    height: screenHeight * 0.1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  InputContainer: {
    flexDirection: "row",
    height: "55%",
  },
  CountryCode: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 22 + (screenWidth > 400 ? 2 : 0),
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    width: 65,
    justifyContent: "space-between",
  },
  CountryCodeText: {
    fontSize: 14 + (screenHeight > 820 ? 2 : 0),
    color: "darkgrey",
    fontWeight: "500",
  },
  PhoneNumber: {
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
    fontSize: 17 + (screenHeight > 820 ? 2 : 0),
    fontWeight: "400",
    minWidth: 162,
  },
  Show: {
    borderWidth: 1,
  },
  Form: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
  },
  BlueLink: {
    color: linkBlue,
    fontWeight: "500",
  },
  Button: {
    backgroundColor: "black",
    height: screenHeight > 650 ? 45 : 40,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22.5,
  },
  ButtonText: {
    color: "white",
    fontSize: 15,
  },
  TnC: {
    fontSize: 12,
    color: "grey",
    fontWeight: "bold",
  },
  CountryCodeCard: {
    height: windowHeight * 0.075,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  CountryCodeSymbol: {
    flexDirection: "row",
    alignItems: "center",
  },
  CountryCodeCardText: {
    fontWeight: "bold",
    marginLeft: 20,
  },
});
