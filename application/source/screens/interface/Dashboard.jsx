import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator, Image } from "react-native";
import Styles from "../../../source/styles/styles";
import { useFonts } from "expo-font";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Dashboard({ navigation }) {
  const [name, setName] = useState(0);
  AsyncStorage.getItem("FirstName").then((res) => {
    setName(res);
  });
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../../../assets/fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../../../assets/fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../../../assets/fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../../../assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../../../assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Or any other placeholder content
  }

  return (
    <View style={Styles.DashboardContainer}>
      <View style={Styles.baseContainer}>
        <Text style={Styles.headingText}>Hi, {name}</Text>
      </View>
      <View style={Styles.dashboardHero}></View>
      <View>
        <Text>Categories</Text>
      </View>
      <View style={Styles.navigation}>
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
        <Image
          style={Styles.icon}
          source={require("../../../assets/icons/home-alt-2-regular-24.png")}
        />
      </View>
    </View>
  );
}
