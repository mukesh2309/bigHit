import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from "react-native";
import styles from "./styles";

interface IProps {
  onPress?: (event: GestureResponderEvent) => void;
  buttonText: string;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}

export const PrimaryButton: React.FC<IProps> = ({
  onPress,
  buttonText,
  containerStyles,
  textStyles,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.Button, containerStyles && containerStyles]}>
        <Text style={[styles.ButtonText, textStyles && textStyles]}>
          {buttonText}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
