import { Callout, Marker } from "react-native-maps";
import { View, Text } from "react-native";
import Styles from "../../../source/styles/styles";

export const MarkerComponent = ({ data }) => {
  console.log(data.location);
  const marker = {
    latlng: {
      latitude: data.location.latitude,
      longitude: data.location.longitude,
    },
    title: "Marker Title", // You might want to use data properties here
    description: "Marker Description", // Same as above
  };

  return (
    <Marker coordinate={marker.latlng}>
      <Callout>
        <Text style={Styles.memberTxt}>
          {data.firstName} {data.lastName}
        </Text>
        <Text style={Styles.familyRole}>Sister</Text>
      </Callout>
    </Marker>
  );
};
