import React, { useState } from "react";
import { View, Text, Button, Modal, StyleSheet } from "react-native";

import { collection, getDocs, doc, setDoc } from "firebase/firestore/lite";
import { authentication } from "../firebase";
import { db } from "../firebase";

export default function ModelView() {
  const [isVisible, setIsVisible] = useState(false);
  const [cityList, setcityList] = useState("");

  const GetData = async () => {
    const citiesCol = collection(db, "name");
    const citySnapshot = await getDocs(citiesCol);
    setcityList = citySnapshot.docs.map((doc) => doc.data());
    // console.log(cityList);
  };
  return (
    <View>
      <Button
        title="Show Data"
        onPress={() => {
          setIsVisible(true);
          GetData();
        }}
      />
      <Modal visible={isVisible} animationType="fade" transparent={true}>
        <View style={styles.modelMainView}>
          <View style={styles.modalView}>
            <Text>{cityList.Email}</Text>

            <Button
              title="Close Data"
              onPress={() => {
                setIsVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  mainConatiner: {
    justifyContent: "center",
    alignItems: "center",
  },
  modelMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 20,
  },
  imageStyle: {
    height: 200,
    width: 300,
  },
});
