import { Entypo, Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import shallow from "zustand/shallow";
import {
  AuthLayout,
  BlueLink,
  FullScreenLoader,
  PrimaryButton,
} from "../../components";
import { useLoginDetailsStore } from "../../stores";
import styles from "./styles";

export const Login = () => {
  const { phoneNumber, countryCode, modifyCountryCode, modifyPhoneNumber } =
    useLoginDetailsStore((state) => ({ ...state }), shallow);
  // const [phoneNumber, setPhoneNumber] = useLoginDetailsStore(state=>({...state}));
  // const [countryCode, setCountryCode] = useState("+1");
  const [isError, setIsError] = useState(false);
  const [isCountryCodeModal, setIsCountryCodeModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorString, setErrorString] = useState("");

  const navigation = useNavigation();

  const clearErrors = () => {
    setIsError(false);
    setErrorString("");
  };

  const setInitialStates = () => {
    setIsLoading(false);
    modifyPhoneNumber("");
    modifyCountryCode("+1");
    clearErrors();
  };

  const setValidationError = (message: string) => {
    setIsError(true);
    setErrorString(message);
  };

  const submitForm = () => {
    if (phoneNumber.length < 10) {
      setValidationError("Please enter a valid phone number");
      return;
    }

    if (!phoneNumber) {
      setValidationError("Please enter a phone number");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      clearErrors();
      setIsLoading(false);
      navigation.navigate("OTP");
    }, 1500);
  };

  return (
    <AuthLayout
      keyboardVerticalOffset={Platform.OS === "android" ? 50 : 10}
      headerText={
        <>
          Welcome to <Text style={{ fontWeight: "bold" }}>BigHit</Text>
        </>
      }
    >
      <FullScreenLoader {...{ isLoading }} />
      <Modal
        animationType="slide"
        visible={isCountryCodeModal}
        onRequestClose={() => {
          setIsCountryCodeModal(!isCountryCodeModal);
        }}
        presentationStyle="pageSheet"
      >
        <View
          style={{
            height: "10%",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 12,
          }}
        >
          <Entypo
            name="chevron-thin-left"
            size={24}
            color="black"
            onPress={() => setIsCountryCodeModal(false)}
          />
          <Text style={{ fontWeight: "bold", flex: 1, textAlign: "center" }}>
            Select Country
          </Text>
        </View>
        <TextInput
          style={{
            fontWeight: "500",
            fontSize: 15,
            borderBottomColor: "lightblue",
            borderBottomWidth: 1,
            width: "90%",
            alignSelf: "center",
            paddingBottom: 5,
          }}
          onChangeText={modifyPhoneNumber}
          value={phoneNumber}
          placeholder="Search your country"
          placeholderTextColor="darkgrey"
          keyboardType="number-pad"
          maxLength={10}
          textContentType="telephoneNumber"
          onFocus={clearErrors}
        />
        <SafeAreaView style={styles.Container}>
          <ScrollView style={styles.Container}>
            {countryCodeArray.map((currentElement) => {
              return (
                <TouchableWithoutFeedback
                  onPress={() => {
                    modifyCountryCode(currentElement.code);
                    setIsCountryCodeModal(false);
                  }}
                  key={currentElement.country}
                >
                  <View style={styles.CountryCodeCard}>
                    <View style={styles.CountryCodeSymbol}>
                      <Fontisto name="world-o" size={25} color="black" />
                      <Text style={styles.CountryCodeCardText}>
                        {currentElement.country}
                      </Text>
                    </View>
                    <Text>{currentElement.code}</Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </ScrollView>
        </SafeAreaView>
      </Modal>
      <View style={styles.Form}>
        <View style={styles.Inputs}>
          <View style={styles.InputContainer}>
            <TouchableWithoutFeedback
              onPress={() => setIsCountryCodeModal(true)}
            >
              <View style={styles.CountryCode}>
                <Fontisto name="world-o" size={15} color="black" />
                <Text style={styles.CountryCodeText}>{countryCode}</Text>
                <Entypo name="chevron-thin-down" size={10} color="grey" />
              </View>
            </TouchableWithoutFeedback>
            <TextInput
              style={[styles.PhoneNumber, phoneNumber && { fontWeight: "500" }]}
              onChangeText={modifyPhoneNumber}
              value={phoneNumber}
              placeholder="Enter Mobile Number"
              placeholderTextColor="grey"
              keyboardType="number-pad"
              maxLength={10}
              textContentType="telephoneNumber"
              onFocus={clearErrors}
            />
          </View>
          {isError ? (
            <Text style={{ fontSize: 15.3, color: "red" }}>{errorString}</Text>
          ) : (
            <Text style={[styles.BlueLink, { fontSize: 15.3 }]}>
              We will send you 6 digit OTP
            </Text>
          )}
        </View>
        <PrimaryButton onPress={submitForm} buttonText="Let's Go" />
        <BlueLink
          style={{
            textTransform: "uppercase",
            textDecorationLine: "underline",
            fontWeight: "bold",
          }}
        >
          Skip to explore
        </BlueLink>
        <Text style={styles.TnC}>
          I agree to the{" "}
          <BlueLink style={{ fontWeight: "bold" }}>User agreement</BlueLink> and{" "}
          <BlueLink>Privacy policy</BlueLink> of BigHit
        </Text>
      </View>
    </AuthLayout>
  );
};

let countryCodeArray: Array<{ country: string; code: string }> = [];

for (let i = 1; i <= 20; i++) {
  countryCodeArray.push({ country: `String${i}`, code: `+${i}` });
}
