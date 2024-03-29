import { StyleSheet, Text, View, Button } from "react-native";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import requestPost from "../../../source/api/api";
import MapView from "react-native-maps";
import { MarkerComponent } from "../../layouts/mapping/Marker";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Styles from "../../../source/styles/styles";

export default function RelTracker() {
  // State & Context Hooks
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../../../assets/fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../../../assets/fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../../../assets/fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../../../assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../../../assets/fonts/DMSans-Bold.ttf"),
  });
  const [context, setContext] = useState([]);

  // Function to Ask the user for their location
  const requestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      console.log("Permission to access location was allowed");
      await updateLocation();
    } else {
      console.error("Permission is denied :(");
    }
  };

  // Updates the Users location and performs side effects
  const updateLocation = async () => {
    const { coords } = await Location.getLastKnownPositionAsync();
    console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
    let Object = {
      Latitude: coords.latitude,
      Longitude: coords.longitude,
      token: await AsyncStorage.getItem("AuthenticationToken"),
    };
    let data = await requestPost("update-location", Object);
    setContext(data);
  };

  useEffect(() => {
    requestPermission();
  }, []); // Empty dependency array means this runs once on mount

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Or any other placeholder content
  }

  const flattenedArray = context.flat();
  let arraycontent = [1, 2];

  return (
    <View style={Styles.container}>
      <MapView style={Styles.MapContainer}>
        {flattenedArray.map((element, index) => (
          <MarkerComponent key={index} data={element} />
        ))}
      </MapView>
      <View style={Styles.membershipList}>
        <Text style={Styles.familyHeader}>Family Members Nearby</Text>
      </View>
    </View>
  );
}
