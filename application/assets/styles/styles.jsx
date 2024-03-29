import { StyleSheet, Text, View, Button } from "react-native";
import { useFonts } from "expo-font";

function StateHook() {
  const [fontsLoaded, fontError] = useFonts({
    DMSansThin: require("../../assets/fonts/DMSans_36pt-Thin.ttf"),
    DMSansLight: require("../../assets/fonts/DMSans_36pt-Light.ttf"),
    DMSansMedium: require("../../assets/fonts/DMSans_36pt-Medium.ttf"),
    DMSansRegular: require("../../assets/fonts/DMSans-Regular.ttf"),
    DMSansBold: require("../../assets/fonts/DMSans-Bold.ttf"),
  });
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  MapContainer: {
    height: "100%",
    width: "100%",
    flex: 1,
  },
  membershipList: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "45%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  familyHeader: {
    fontFamily: "DMSansBold",
    fontSize: 25,
  },
  familyMember: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    display: "flex",
    flexDirection: "row",
  },
  familyMemberIcon: {
    height: 30,
    width: 30,
    borderRadius: 25,
    backgroundColor: "red",
    marginRight: 10,
  },
  familyName: {
    fontFamily: "DMSansThin",
    fontWeight: "normal",
    textTransform: "uppercase",
    fontSize: 15,
  },
  memberTxt: {
    fontFamily: "DMSansMedium",
  },
  familyRole: {
    fontFamily: "DMSansThin",
    textAlign: "center",
  },

  //   Login
  LoginContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 25,
    paddingTop: 80,
  },

  WelcomeContainer: {
    flex: 0,
  },
  WelcomeHeader: {
    fontFamily: "DMSansBold",
    fontSize: 30,
    letterSpacing: 2,
  },
  WelcomeSubTxt: {
    fontFamily: "DMSansLight",
    fontWeight: 100,
    letterSpacing: 2,
  },
  RegistrationContainer: {
    marginTop: 30,
  },
  InputContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    fontFamily: "DMSansLight",
    fontSize: 20,
    paddingBottom: 12,
    marginTop: 30,
  },
  icon: {
    height: 40,
    width: 40,
  },
  LoginIconix: {
    marginBottom: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  loginIconParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 35,
    gap: 20,
  },
  loginIcon: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    borderRadius: 25,
  },
  //   Dashboard Home Screen
  DashboardContainer: {
    paddingTop: 80,
    flex: 1,
    backgroundColor: "#FEFEFF",
  },
  headingText: {
    fontFamily: "DMSansLight",
    fontSize: 20,
    letterSpacing: 2,
    margin: 15,
  },
  dashboardHero: {
    flex: 0.3,
    backgroundColor: "#9590D5",
    borderRadius: 80,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 30,
    margin: 25,
  },
  navigation: {
    backgroundColor: "#9590D5",
    position: "absolute",
    bottom: 0,
    width: "100%",
    right: 0,
    left: 0,
    display: "flex",
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
  },
  //   CHat APp

  ChatApplication: {
    flex: 1,
    backgroundColor: "#FEFEFF",
    position: "relative",
  },

  BotHeader: {
    backgroundColor: "red",
    flex: 0.15,
  },

  UserMessageContainer: {
    backgroundColor: "#B252DC",
    alignItems: "flex-start",
    margin: 20,
    padding: 20,
    right: 0,
    color: "white",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "60%",
  },
  BotMessageContainer: {
    backgroundColor: "#EEEEEE",
    alignItems: "flex-start",
    margin: 20,
    padding: 20,
    left: 0,
    color: "white",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    width: "60%",
    borderTopRightRadius: 30,
  },
  UserMessageText: {
    fontFamily: "DMSansLight",
    color: "white",
    lineHeight: 30,
    textAlign: "right",
  },
  BotMessageText: {
    fontFamily: "DMSansLight",
    color: "black",
    lineHeight: 30,
  },
  messageContainer: {
    flex: 1,
    justifyContent: "flex-start", // Aligns children to the start of the container's main axis.
    alignItems: "flex-start", // Aligns children to the start of the container's cross axis.
    padding: 50,
  },
  ChatMessageContainer: {
    padding: 0.2,
  },
  InputContainerChat: {
    backgroundColor: "#FEFEFF",
    margin: 20,
    padding: 20,
    borderRadius: 30,
    color: "white",
    position: "absolute",
    bottom: 0,
    width: "90%",
    marginBottom: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  InputText: {
    fontFamily: "DMSansLight",
    fontSize: 13,
  },
});

export default Styles;
