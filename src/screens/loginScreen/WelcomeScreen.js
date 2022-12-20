import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import logo from "../../../assets/logo.png";
import { colors, hr80 } from "../../globals/style";
export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WELCOME TO CHEF FOOD </Text>
      <View style={styles.logoout}>
        <Image source={logo} style={styles.logo} />
      </View>
      <View style={hr80} />
      <Text style={styles.text}>Find the best food from Restaurant </Text>
      <View style={hr80} />
      <View style={styles.btnout}>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.btn}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.btn}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff4242",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 45,
    color: colors.col1,
    textAlign: "center",
    marginVertical: 10,
    padding: 2,
    fontWeight: "400",
  },
  logoout: {
    width: "80%",
    height: "30%",
    alignItems: "center",
  },
  logo: {
    width: "80%",
    height: "100%",
  },
  text: {
    fontSize: 18,
    width: "80%",
    color: colors.col1,
    textAlign: "center",
  },
  btnout: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 20,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 30,
    marginHorizontal: 10,
    fontWeight: "700",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
});
