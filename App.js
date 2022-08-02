import React from "react";
import Index from "./components";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SearchScreen from "./screens/SearchScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SearchedWeather from "./screens/SearchedWeather";
import HomeScreen from "./screens/HomeScreen";
import Bubble from "./screens/Bubble";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          style: {
            backgroundColor: "#000",
          },
        }}
      >
        <Stack.Screen name="Home" component={Index} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SearchedWeather" component={SearchedWeather} />
        <Stack.Screen name="MainScreen" component={HomeScreen} />
        <Stack.Screen name="Bubble" component={Bubble} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
