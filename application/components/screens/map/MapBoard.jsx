import { StyleSheet, Text, View, Button } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import requestPost from "../../services/api";
import MapView from "react-native-maps";
import { Callout } from "react-native-maps";
import { Marker } from "react-native-maps";
import { MarkerComponent } from "../../layouts/mapping/Marker";
import { useEffect, useState } from "react";

export default function RelTracker() {
  const [context, setContext] = useState([]);
  // Is Called When permission is granted to use location
  // Request Permission Function
  const requestPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      console.log("Permission to access location was allowed");
      await updateLocation();
    } else {
      console.error("Permission is denied :(");
    }
  };

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

  return (
    <View style={styles.container}>
      <MapView style={styles.MapContainer}>
        {context.map((element, index) => (
          <MarkerComponent key={index} data={element} />
        ))}
      </MapView>
      <Button title={"Update"} onPress={requestPermission} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MapContainer: {
    height: "100%",
    width: "100%",
  },
});
