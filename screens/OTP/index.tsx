import { NavigationContext } from "@react-navigation/native";
import React, { Component, createRef } from "react";
import { Keyboard, Text, TextInput, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import {
  AuthLayout,
  BlueLink,
  FullScreenLoader,
  PrimaryButton,
} from "../../components";
import { useAuthStore, useLoginDetailsStore } from "../../stores";
import styles from "./styles";
import LottieView from "lottie-react-native";

const noOfInputsArr = [1, 2, 3, 4, 5, 6];

const noOfInputs = noOfInputsArr.length;

export class OTP extends Component {
  state = {
    otp: noOfInputsArr.reduce(
      (accumulator, currentElement) => ({
        ...accumulator,
        [`${currentElement}`]: "",
      }),
      {}
    ),
    isError: false,
    isLoading: false,
    isLoadingTick: false,
    errorString: "",
  };

  inputRef = noOfInputsArr.reduce(
    (accumulator, currentElement) => ({
      ...accumulator,
      [`${currentElement}`]: createRef(),
    }),
    {}
  );

  static contextType = NavigationContext;
  onInputChange = (key: number) => {
    return (input: string) => {
      this.setState({
        otp: { ...this.state.otp, [`${key}`]: input },
      });

      if (input) {
        this.inputRef[`${key + 1}`]?.current.focus();
      } else {
        this.inputRef[`${key - 1}`]?.current.focus();
      }
    };
  };

  onKeyPressed = (key: number) => {
    return ({ nativeEvent: { key: keyValue } }) => {
      if (!isNaN(keyValue)) {
        this.setState({
          otp: {
            ...this.state.otp,
            [`${key + (this.state.otp[`${key}`] ? 1 : 0)}`]: keyValue,
          },
        });
        this.inputRef[`${key + 1}`]?.current.focus();
        return;
      }

      if (keyValue === "Backspace") {
        if (this.state.otp[`${key}`]) {
          this.setState({
            otp: { ...this.state.otp, [`${key}`]: "" },
          });
        }
        this.inputRef[`${key - 1}`]?.current.focus();
        // }
        return;
      }

      if (keyValue === "Enter") {
        this.inputRef[`${key - 1}`]?.current.focus();
        return;
      }
    };
  };

  onFormSubmit = () => {
    Keyboard.dismiss();
    const otpLength = (
      Object.values(this.state.otp).reduce(
        (accumulator: string, currentElement) =>
          (accumulator += currentElement),
        ""
      ) as string
    ).length;

    if (otpLength < 6) {
      this.setState({ errorString: "Please enter valid OTP", isError: true });
      return;
    }

    if (otpLength < 1) {
      this.setState({
        errorString: "Please enter the OTP sent to you",
        isError: true,
      });
      return;
    }

    this.setState({ errorString: "", isError: false, isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
      this.setState({ isLoadingTick: true });
      // useAuthStore.setState({ isAuthenticated: true });
    }, 800);
    setTimeout(() => {
      this.setState({ isLoadingTick: false });
      useAuthStore.setState({ isAuthenticated: true });
    }, 1500);
  };

  render() {
    return (
      <AuthLayout
        headerHeight={styles.Header.height}
        headerText={
          !this.state.isLoadingTick && (
            <View style={styles.Header}>
              <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                Enter 6 digit OTP sent on
              </Text>
              <View style={styles.PhoneNumber}>
                <Text style={{ fontSize: 12 }}>
                  {useLoginDetailsStore.getState().countryCode}
                  {"-"}
                  {useLoginDetailsStore.getState().phoneNumber}
                </Text>
                <TouchableWithoutFeedback
                  onPress={() => this.context?.navigate("Login")}
                >
                  <BlueLink
                    style={{
                      fontWeight: "600",
                      textDecorationLine: "underline",
                      fontSize: 12,
                    }}
                  >
                    Change
                  </BlueLink>
                </TouchableWithoutFeedback>
              </View>
            </View>
          )
        }
      >
        {!this.state.isLoadingTick ? (
          <>
            <FullScreenLoader isLoading={this.state.isLoading} />
            <View style={styles.Form}>
              <View style={styles.InputContainer}>
                <View style={[styles.Inputs]}>
                  {noOfInputsArr.map((currentElement, currentIndex) => (
                    <TextInput
                      key={String(currentElement)}
                      // had made manLength dynamic for paste functionality
                      maxLength={/* noOfInputs - currentIndex */ 1}
                      keyboardType="number-pad"
                      textContentType="oneTimeCode"
                      textAlign="center"
                      style={[
                        styles.Input,
                        this.state.isError && { borderColor: "red" },
                      ]}
                      value={this.state.otp[`${currentElement}`]}
                      ref={this.inputRef[`${currentElement}`]}
                      // onChangeText={this.onInputChange(currentElement)}
                      onKeyPress={this.onKeyPressed(currentElement)}
                      onSubmitEditing={this.onFormSubmit}
                      onFocus={() =>
                        this.setState({ errorString: "", isError: false })
                      }
                    />
                  ))}
                </View>
                <Text style={{ color: "red" }}>
                  {this.state.isError && this.state.errorString}
                </Text>
              </View>
              <View style={styles.Buttons}>
                <PrimaryButton
                  buttonText="Submit"
                  onPress={this.onFormSubmit}
                />
                {this.state.isError ? (
                  <BlueLink
                    style={{
                      fontWeight: "bold",
                      textDecorationLine: "underline",
                    }}
                  >
                    Resend OTP
                  </BlueLink>
                ) : (
                  <Text style={{ fontWeight: "bold", color: "grey" }}>
                    Resend OTP 30s
                  </Text>
                )}
              </View>
            </View>
          </>
        ) : (
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 18 }}>
              Login Success!
            </Text>
            <View style={{ marginTop: 22 }}>
              <LottieView
                autoPlay
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: "transparent",
                }}
                source={require("../../assets/tick-animation.json")}
              />
            </View>
          </View>
        )}
      </AuthLayout>
    );
  }
}
