import {
  View,
  Text,
  StyleSheet,
  Button,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";

import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { authentication } from "../../firebase";
import { db } from "../../firebase";

export default function UserProfileData() {
  const GetData = async () => {
    const citiesCol = collection(db, "name");
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map((doc) => doc.data());
    <View>
      <Text>{cityList.Email}</Text>
    </View>;
    console.log(cityList);
  };

  return (
    <View>
      <Button title="Get Data" onPress={GetData} />
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196f3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modaText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
