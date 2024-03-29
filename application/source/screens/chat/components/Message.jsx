import { Text, View } from "react-native";
import Styles from "../../../../source/styles/styles";

export const UserMessageComponent = (props) => {
  return (
    <View style={Styles.UserMessageContainer}>
      <Text style={Styles.UserMessageText}>{props.text}</Text>
    </View>
  );
};

export const BotMessageComponent = (props) => {
  return (
    <View style={Styles.BotMessageContainer}>
      <Text style={Styles.BotMessageText}>{props.text}</Text>
    </View>
  );
};
