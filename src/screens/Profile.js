import { async } from "@firebase/util";
// import { doc, QuerySnapshot } from "firebase/firestore/lite";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { firebase } from "../../firebase";

export default function Profile() {
  const [users, setUsers] = useState([]);
  const dataRef = firebase.firestore().collection("name");
  useEffect(() => {
    async function check() {
      dataRef.onSnapshot((querySnapshot) => {
        const users = [];
        querySnapshot.forEach((doc) => {
          const { Address, Email, Name, Password, Phone1 } = doc.data();
          users.push({
            id: doc.id,
            Address,
            Email,
            Name,
            Password,
            Phone1,
          });
        });
        setUsers(users);
      });
    }
    check();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ margin: 15, fontSize: 20, fontWeight: "bold" }}>
        Profile Data{" "}
      </Text>
      <FlatList
        style={{ height: "100%" }}
        data={users}
        renderItem={({ item }) => (
          <Pressable style={Styles.conatiner}>
            <View style={Styles.innerContainer}>
              <Text style={Styles.itemHeading}>Name:{item.Name}</Text>
              <Text style={Styles.itemHeading}>Email Id{item.Email}</Text>
              <Text style={Styles.itemHeading}>Address {item.Address}</Text>
              <Text style={Styles.itemHeading}>
                Phone Number :{item.Phone1}
              </Text>
            </View>
          </Pressable>
        )}
      />
    </View>
  );
}
const Styles = StyleSheet.create({
  conatiner: {
    backgroundColor: "#e5e5e5",
    padding: 15,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  itemHeading: {
    fontWeight: "bold",
  },
  itemText: {
    fontWeight: "300",
  },
});
