import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

export default function FlatButton(props) {
  const [loaded] = useFonts({
    CustomFont: require("../../../assets/fonts/Amaranth-Bold.ttf"),
    // You can load as many fonts as needed
  });

  if (!loaded) {
    return undefined;
  }
  return (
    <TouchableOpacity onPress={props.event} style={props.TouchStyles}>
      <View style={props.ButtonStyles}>
        <Text style={props.TextStyle}>{props.content}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF5252",
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  buttonStyles: {
    padding: 20,
  },
});
