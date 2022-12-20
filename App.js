import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RootNavigation from "./src/RootNavigation";
import LoginScreen from "./src/screens/loginScreen/LoginScreen";
import WelcomeScreen from "./src/screens/loginScreen/WelcomeScreen";

export default function App() {
  return <RootNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
