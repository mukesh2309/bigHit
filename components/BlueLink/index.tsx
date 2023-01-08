import React from "react";
import { StyleProp, Text, TextStyle } from "react-native";
import styles from "./styles";

interface IProps {
  children: string;
  style?: StyleProp<TextStyle>;
}

export const BlueLink: React.FC<IProps> = ({ children, style }) => {
  return <Text style={[styles.BlueLink, style && style]}>{children}</Text>;
};
