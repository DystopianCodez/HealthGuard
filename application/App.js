import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import requestPost from "./components/services/api";
import DashStack from "./components/navigation/DashStack";

export default function App() {
  return <DashStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
