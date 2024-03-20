// Dependencies & Packages Import
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { useState } from "react";
import requestPost from "../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {
  const [emailAddress, setEmailAddress] = useState(0);
  const [password, setPassword] = useState(0);

  function emailAddressHandler(enteredAddress) {
    setEmailAddress(enteredAddress);
  }

  function passwordHandler(enteredPassword) {
    setPassword(enteredPassword);
  }

  async function accountLoginHandler() {
    const UserData = {
      emailAddress: emailAddress,
      password: password,
    };
    let data = await requestPost("login-account/app", UserData);
    await AsyncStorage.setItem("AuthenticationToken", data);
    navigation.navigate("DashboardMap");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Enter Email Address"}
        style={styles.inputStyle}
        onChangeText={emailAddressHandler}
      />
      <TextInput
        placeholder={"Enter Password"}
        style={styles.inputStyle}
        onChangeText={passwordHandler}
      />
      <Button title={"Create Account"} onPress={accountLoginHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#91A6FF",
    flex: 1,
  },
  header: {
    flex: 1,
  },
  registrationContainer: {
    backgroundColor: "white",
    flex: 1.22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
  },
  registrationHeader: {
    textTransform: "uppercase",
    textAlign: "center",
    marginVertical: 30,
    fontSize: 30,
  },
  inputText: {
    textTransform: "uppercase",
    fontSize: 20,
    // fontWeight: 100,
  },
  inputStyle: {
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  horizantalVact: {
    marginTop: 20,
  },
});
