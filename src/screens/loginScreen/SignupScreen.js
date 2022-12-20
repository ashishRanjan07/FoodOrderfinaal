import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { title, colors, btn1, hr80 } from "../../globals/style";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { authentication } from "../../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { async } from "@firebase/util";

export default function SignupScreen({ navigation }) {
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [showPassword, setShowpassword] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);
  const [nameFocus, setNameFocus] = useState(false);
  const [showcpassword, setShowcpassword] = useState(false);
  const [cpasswordcFocus, setcPasswordFocus] = useState(false);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const RegisterUser = () => {
    const dbName = Math.random().toString();
    createUserWithEmailAndPassword(authentication, email, password)
      .then((re) => {
        console.log(re);
        setIsSignedIn(true);
        navigation.navigate("Login");

        const name1 = name;
        const email1 = email;
        const phone1 = phone;
        const password1 = password;
        const address1 = address;
        setDoc(doc(db, "name", dbName), {
          Name: name1,
          Email: email1,
          Phone1: phone1,
          Password: password1,
          Address: address1,
        });
        // const setData = async () => {
        //   const name = setName();

        //   await setDoc(doc(db, "name", "Random_doc"), {
        //     Name: name,
        //   });
        // };
      })
      .catch((re) => {
        console.log(re);
        navigation.navigate("Login");
      });
  };

  return (
    <ScrollView>
      <View style={styles.conatiner}>
        <Text style={styles.head1}>Sign Up</Text>
        <View style={styles.inputout}>
          <AntDesign
            name="user"
            size={24}
            color={nameFocus === true ? "red" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Name"
            onFocus={() => {
              setNameFocus(true);
              setEmailFocus(false);
              setPasswordFocus(false);
              setShowpassword(false);
              setPhoneFocus(false);
            }}
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>

        <View style={styles.inputout}>
          <MaterialIcons
            name="email"
            size={24}
            color={emailFocus === true ? "red" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onFocus={() => {
              setEmailFocus(true);
              setPasswordFocus(false);
              setShowpassword(false);
              setNameFocus(false);
              setPhoneFocus(false);
            }}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputout}>
          <AntDesign
            name="phone"
            size={24}
            color={phoneFocus === true ? "red" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Mobile Number"
            onFocus={() => {
              setEmailFocus(false);
              setPhoneFocus(true);
              setPasswordFocus(false);
              setShowpassword(false);
              setNameFocus(false);
            }}
            value={phone}
            onChangeText={(text) => setPhone(text)}
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
              setNameFocus(false);
              setPhoneFocus(false);
              setShowpassword(false);
            }}
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={showPassword === false ? true : false}
          />
          <Octicons
            name={showPassword == false ? "eye-closed" : "eye"}
            size={24}
            color="black"
            onPress={() => {
              setShowpassword(!showPassword);
            }}
          />
        </View>

        <View style={styles.inputout}>
          <MaterialIcons
            name="lock-outline"
            size={24}
            color={cpasswordcFocus === true ? "red" : "black"}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onFocus={() => {
              setEmailFocus(false);
              setcPasswordFocus(true);
              setPasswordFocus(false);
            }}
            secureTextEntry={showcpassword === false ? true : false}
          />
          <Octicons
            name={showcpassword == false ? "eye-closed" : "eye"}
            size={24}
            color="black"
            onPress={() => {
              setShowcpassword(!showcpassword);
            }}
          />
        </View>

        <Text style={styles.address}> Please Enter your Address</Text>
        <View style={styles.inputout}>
          <TextInput
            style={styles.input1}
            placeholder="Enter your Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <TouchableOpacity style={btn1} onPress={RegisterUser}>
          <Text
            style={{
              color: colors.col1,
              fontSize: title.btntxt,
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
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
          Already have an Account?
          <Text
            style={styles.signup}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: 40,
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
    marginBottom: 10,
    fontSize: 25,
  },
  gf: {
    flexDirection: "row",
  },
  gficon: {
    backgroundColor: "#fff",
    width: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    elevation: 10,
  },
  signup: {
    color: colors.text1,
  },
  input1: {
    fontSize: 18,
    color: colors.text2,
    marginTop: 20,
  },
});
