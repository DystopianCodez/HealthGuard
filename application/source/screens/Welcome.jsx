// Dependencies & Packages Import
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FlatButton from "../layouts/common/Button";

export default function Welcome({ navigation }) {
  function LoginNavigator() {
    navigation.navigate("LoginScreen");
  }

  function RegistrationNavigator() {
    navigation.navigate("RegisterScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <FlatButton
          content={"Sign Up"}
          stylin={{ width: "100%" }}
          buttonStyles={{
            backgroundColor: "white",
            width: "100%",
            padding: 20,
            borderRadius: 30,
          }}
          event={LoginNavigator}
        />
        <FlatButton
          content={"Sign In"}
          stylin={{ width: "100%", marginTop: 20 }}
          buttonStyles={{
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            width: "100%",
            padding: 20,
            borderRadius: 30,
          }}
          event={RegistrationNavigator}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#CED3DC",
    flex: 1,
    padding: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});
