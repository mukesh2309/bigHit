import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState, useRef, useEffect } from "react";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  PanResponder,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import {
  isHeightSmall,
  screenHeight,
  screenWidth,
  windowHeight,
  windowWidth,
} from "../../constants/dimensions";

export const Home = () => {
  const bottomValue = useRef(
    new Animated.ValueXY({ x: 0, y: screenHeight })
  ).current;

  const topValue = useRef(new Animated.ValueXY({ x: 0, y: -500 })).current;

  useEffect(() => {
    Animated.timing(bottomValue, {
      toValue: { x: 0, y: 0 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(topValue, {
      toValue: { x: 0, y: 0 },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, position: "relative" }}>
        <StatusBar
          translucent={false}
          backgroundColor="blue"
          style={Platform.OS === "android" ? "light" : "dark"}
        />
        <Animated.View style={topValue.getLayout()}>
          <View
            style={{
              height: screenHeight / 4,
              width: screenWidth + 80,
              borderBottomLeftRadius: 100,
              borderBottomRightRadius: 100,
              backgroundColor: "blue",
              position: "absolute",
              zIndex: -1,
              left: -40,
            }}
          ></View>
          <View style={[styles.Header, { marginBottom: 40 }]}>
            <View style={[styles.HeaderTitle, { marginTop: 20 }]}>
              <Text style={styles.HeaderText}>
                Welcome To <Text style={{ fontWeight: "bold" }}>BigHit</Text>
              </Text>
              <Text style={styles.HeaderText}>
                India's biggest sports platform
              </Text>
            </View>
            <View style={[styles.HeaderButton, { marginTop: 20 }]}>
              <Text style={[styles.HeaderText, { textAlign: "center" }]}>
                Create Profile
              </Text>
            </View>
          </View>
          <ScrollView
            style={styles.Banner}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {getArrayWithXElements(3).map((currentElement) => {
              return <BannerItem key={currentElement} />;
            })}
          </ScrollView>
        </Animated.View>
        <Animated.View style={bottomValue.getLayout()}>
          <View style={{ marginTop: 30 }}>
            <ScrollView
              style={styles.Categories}
              contentContainerStyle={{
                flexDirection: "row",
                alignItems: "center",
              }}
              horizontal
              showsHorizontalScrollIndicator={false}
            >
              {getArrayWithXElements(6).map((currentElement) => {
                return <CategoryItem key={currentElement} />;
              })}
            </ScrollView>
            <View style={{ paddingVertical: 10 }}>
              <View style={[styles.LeaderBoardTitle, { marginBottom: 10 }]}>
                <FontAwesome name="star" size={18} color="orange" />
                <Text style={styles.LeaderBoardText}>
                  Top Players on BigHit Leaderboard
                </Text>
              </View>
              <FlatList
                data={getArrayWithXElements(20)}
                renderItem={() => <PlayerItem />}
                keyExtractor={(item) => item.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.LeaderBoardFlatlist}
                contentContainerStyle={{ alignItems: "center" }}
              />
            </View>
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

const BannerItem = () => {
  return (
    <View style={styles.BannerContainer}>
      <Image
        source={require("../../assets/images/banner.png")}
        style={styles.BannerImage}
        resizeMode="contain"
      />
      <Text style={styles.BannerText}>
        Upload your videos and images showcase yourself
      </Text>
      <TouchableWithoutFeedback>
        <View style={styles.BannerButton}>
          <Text style={styles.BannerButtonText}>Explore & Vote</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.BannerScroller}></View>
    </View>
  );
};

const CategoryItem = () => {
  return (
    <View style={styles.CategoryContainer}>
      <Image
        source={require("../../assets/images/categories.png")}
        style={styles.CategoryImage}
        resizeMode="cover"
      />
      <View style={styles.CategoryTextContainer}>
        <Text style={styles.CategoryText}>Categories</Text>
      </View>
    </View>
  );
};

const PlayerItem = () => {
  return (
    <View style={styles.PlayerContainer}>
      <Image
        source={require("../../assets/images/leaderboard.png")}
        resizeMode="contain"
        style={styles.PlayerImage}
      />
      <Text style={styles.PlayerText}>Player Name</Text>
    </View>
  );
};

const getArrayWithXElements = (x: number) => {
  let array: number[] = [];

  for (let i = 1; i <= x; i++) {
    array.push(i);
  }

  return array;
};
