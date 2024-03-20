import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

// Import your screens
import Home from "../screens/HomeScreen";
import DashboardMap from "../screens/map/MapBoard.jsx";

// Create the stack navigator
const Stack = createStackNavigator();

function DashStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DashboardMap" component={DashboardMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default DashStack;
