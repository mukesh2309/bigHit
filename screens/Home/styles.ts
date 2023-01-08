import { StatusBar, StyleSheet } from "react-native";
import {
  isHeightSmall,
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
} from "../../constants";

export default StyleSheet.create({
  Container: { flex: 1, backgroundColor: "white" },
  Circle: {
    height: screenHeight + 25,
    width: screenHeight + 25,
    borderRadius: screenHeight / 2,
    backgroundColor: "blue",
    position: "absolute",
    bottom: screenHeight / 1.8 + StatusBar.currentHeight,
    zIndex: -1,
    color: "blue",
    left: -(screenHeight + 25 - screenWidth) / 2,
  },
  Header: {
    height: "8%",
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    alignItems: "center",
  },
  HeaderText: {
    color: "white",
    fontSize: 13,
  },
  HeaderTitle: {
    justifyContent: "space-evenly",
    height: "100%",
  },
  HeaderButton: {
    height: "100%",
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignContent: "center",
    minWidth: "30%",
    borderRadius: windowHeight * 0.3,
  },
  Banner: {
    // borderWidth: 1,
    height: "35%",
  },
  Categories: {
    // borderWidth: 1,
    // height: "20%",
    paddingHorizontal: 5,
  },
  Leaderboard: {
    height: "19%",
  },
  BannerContainer: {
    width: windowWidth,
    height: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  BannerImage: {
    width: windowWidth * (isHeightSmall ? 0.75 : 0.85),
    height: (windowWidth * (isHeightSmall ? 0.75 : 0.85) * 9) / 16,
  },
  BannerText: {
    width: isHeightSmall ? "60%" : "70%",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: isHeightSmall ? 13 : 16,
  },
  BannerButton: {
    height: isHeightSmall ? 25 : 32,
    width: isHeightSmall ? "30%" : "37%",
    borderRadius: isHeightSmall ? 12.5 : 16,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  BannerButtonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 12,
  },
  BannerScroller: {
    height: isHeightSmall ? 4 : 6,
    width: "15%",
    backgroundColor: "black",
    borderRadius: isHeightSmall ? 2 : 3,
  },
  CategoryContainer: {
    width: windowWidth * 0.3,
    height: "80%",
    alignItems: "center",
    marginHorizontal: windowWidth * 0.013,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5,
    shadowRadius: 12,
    shadowColor: "darkgrey",
    shadowOpacity: 1,
    shadowOffset: {
      height: 2,
      width: 1,
    },
  },
  CategoryImage: {
    width: windowWidth * 0.3,
    height: windowWidth * 0.3 * 0.9,
  },
  CategoryTextContainer: {
    // height: windowWidth * 0.3 * 0.3,
    justifyContent: "center",
    alignContent: "center",
    width: "100%",
  },
  CategoryText: { fontWeight: "bold", textAlign: "center" },
  PlayerContainer: {
    width: windowWidth / 7,
    marginHorizontal: 6,
    // borderWidth: 1,
    height: "85%",
  },
  PlayerImage: {
    width: windowWidth / 7,
    height: windowWidth / 7,
  },
  PlayerText: { fontSize: 11, textAlign: "center" },
  LeaderBoardTitle: {
    flexDirection: "row",
    paddingLeft: 10,
    alignItems: "flex-end",
  },
  LeaderBoardText: {
    fontWeight: "bold",
    paddingLeft: 10,
  },
  LeaderBoardFlatlist: {
    paddingHorizontal: 5,
    // borderWidth: 1,
  },
});
