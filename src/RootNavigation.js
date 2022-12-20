import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./screens/loginScreen/AuthNavigation";
import BottomNavigation from "./screens/loginScreen/BottomNavigation";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
}
