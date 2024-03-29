import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, Button } from "react-native";
import Styles from "../../../source/styles/styles";
import { useFonts } from "expo-font";
import requestPost from "../../../source/api/api";
import randomString from "randomstring";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ChatApplication({ navigation }) {
  //   Component Hooks
  const [inputText, setInputText] = useState(0);
  const [chatConversations, setChatConversations] = useState([]);
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../../../assets/fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../../../assets/fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../../../assets/fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../../../assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../../../assets/fonts/DMSans-Bold.ttf"),
  });

  // Font Loader
  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Or any other placeholder content
  }

  function ChatInputText(InputText) {
    setInputText(InputText);
  }

  async function ChatInputHandler() {
    let TextObject = {
      text: inputText,
    };
    let ConversationArray = await AsyncStorage.getItem(
      "ChatConversations",
    ).then((res) => res);
    ConversationArray = JSON.parse(ConversationArray);
    ConversationArray.push({
      MessageContent: inputText,
      type: "USER",
    });
    let data = await requestPost("create-prompt", TextObject);
    ConversationArray.push({
      MessageContent: data,
      type: "BOT",
    });
    let UpdatedDataType = JSON.stringify(ConversationArray);
    await AsyncStorage.setItem("ChatConversations", UpdatedDataType);
    AsyncStorage.getItem("ChatConversations").then((res) => console.log(res));
  }

  useEffect(() => {
    AsyncStorage.getItem("ChatConversations").then((res) => {
      // if (res) {
      //   let data = JSON.parse(res);
      //   setChatConversations(data);
      // }
      let data = JSON.parse(res);
      setChatConversations(data);
      console.log(chatConversations);
    });
  }, []);

  return (
    <View style={Styles.ChatApplication}>
      <View style={Styles.BotHeader}></View>
      <View style={Styles.ChatMessageContainer}></View>
      <View style={Styles.InputContainerChat}>
        <TextInput
          placeholder={"Write your message"}
          style={Styles.InputText}
          onChangeText={ChatInputText}
        />
        <Button title={"Submit"} onPress={ChatInputHandler} />
      </View>
    </View>
  );
}
