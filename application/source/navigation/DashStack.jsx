import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens
import Welcome from "../components/screens/Welcome";
import Login from "../components/screens/security/LoginScreen";
import Register from "../components/screens/security/RegistrationScreen";

// Dashboard Screens
import Dashboard from "../components/screens/interface/Dashboard";
import RelTracker from "../components/screens/map/MapBoard";
import ChatApplication from "../components/screens/chat/Chat";
// Create the stack navigator
const Stack = createStackNavigator();

function DashStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DashboardHomeScreen"
        screenOptions={{
          headerShown: false, // This line hides the header
        }}
      >
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="RegisterScreen" component={Register} />
        <Stack.Screen name="DashboardHomeScreen" component={Dashboard} />
        <Stack.Screen name="MapBoard" component={RelTracker} />
        <Stack.Screen name="Chat" component={ChatApplication} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DashStack;
