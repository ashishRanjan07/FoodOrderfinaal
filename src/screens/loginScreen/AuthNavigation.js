import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import SignupScreen from "./SignupScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import BottomNavigation from "./BottomNavigation";
import RestaurantDetailsPage from "../RestaurantDetailsPage";
import PaymentProfile from "../PaymentProfile";

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignupScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RestaurantDetailsPage"
        component={RestaurantDetailsPage}
        options={{ title: "Restaurant Details" }}
      />
      <Stack.Screen
        name="PaymentProfile"
        component={PaymentProfile}
        options={{ title: "Payment" }}
      />
    </Stack.Navigator>
  );
}
