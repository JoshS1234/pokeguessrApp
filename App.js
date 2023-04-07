import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./components/LoginScreen";
import GameScreen from "./components/GameScreen";
import AccountScreen from "./components/AccountScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="GameScreen" component={GameScreen} />
        <Tab.Screen name="AccountScreen" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
