import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { title, colors, btn1, hr80 } from "../../globals/style";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { authentication } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPasswordFocus, setShowpasswordFocus] = useState(false);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignInUser = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        setIsSignedIn(true);
        navigation.navigate("BottomNavigator");
      })
      .catch((re) => {
        console.log(re);
      });
  };

  return (
    <View style={styles.conatiner}>
      <Text style={styles.head1}>Sign In</Text>
      <View style={styles.inputout}>
        <AntDesign
          name="user"
          size={24}
          color={emailFocus === true ? "red" : "black"}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onFocus={() => {
            setEmailFocus(true);
            setPasswordFocus(false);
            setShowpasswordFocus(false);
          }}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputout}>
        <MaterialIcons
          name="lock-outline"
          size={24}
          color={passwordFocus === true ? "red" : "black"}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onFocus={() => {
            setEmailFocus(false);
            setPasswordFocus(true);
          }}
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={showPasswordFocus === false ? true : false}
        />
        <Octicons
          name={showPasswordFocus == false ? "eye-closed" : "eye"}
          size={24}
          color="black"
          onPress={() => {
            setShowpasswordFocus(!showPasswordFocus);
          }}
        />
      </View>
      <TouchableOpacity style={btn1} onPress={SignInUser}>
        <Text
          style={{
            color: colors.col1,
            fontSize: title.btntxt,
            fontWeight: "bold",
          }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
      <Text style={styles.forget}>Forget Password</Text>
      <Text style={styles.or}>OR</Text>
      <Text style={styles.gftxt}>Sign In With</Text>
      <View style={styles.gf}>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <AntDesign name="google" size={24} color="blue" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.gficon}>
            <Entypo name="facebook" size={24} color="blue" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={hr80} />
      <Text>
        Don't have an Account?
        <Text
          style={styles.signup}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  head1: {
    fontSize: title.title1,
    color: colors.text1,
    textAlign: "center",
    marginVertical: 10,
  },
  inputout: {
    flexDirection: "row",
    width: "80%",
    marginVertical: 10,
    backgroundColor: colors.col1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 20,
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "80%",
  },
  forget: {
    color: colors.text2,
    marginTop: 20,
    marginBottom: 10,
  },
  or: {
    color: colors.text1,
    marginVertical: 10,
    fontWeight: "bold",
  },
  gftxt: {
    color: colors.text2,
    marginVertical: 10,
    fontSize: 25,
  },
  gf: {
    flexDirection: "row",
  },
  gficon: {
    backgroundColor: "#fff",
    width: 50,
    margin: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 10,
  },
  signup: {
    color: colors.text1,
  },
});
