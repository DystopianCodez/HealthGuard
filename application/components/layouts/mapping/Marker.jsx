import { Callout, Marker } from "react-native-maps";
import { View, Text } from "react-native";

export const MarkerComponent = (props) => {
  let data = props.data;
  const marker = {
    latlng: {
      latitude: data[0].location.latitude,
      longitude: data[0].location.longitude,
    },
    // Other properties you might want to use in your custom views
    title: "Marker Title",
    description: "Marker Description",
  };
  return (
    <Marker coordinate={marker.latlng}>
      <Callout>
        <Text>
          {data[0].firstName} {data[0].lastName}
        </Text>
      </Callout>
    </Marker>
  );
};
