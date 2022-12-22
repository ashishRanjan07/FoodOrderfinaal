import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function TrackOrder() {
  const navigation = useNavigation();
  const [prepared, setPrepared] = useState(false);
  const [orderReady, setOrderReady] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const trackOrder = () => {
    setPrepared(true);
    setOrderReady(false);
    setDelivered(false);

    setTimeout(() => {
      setOrderReady(true);
      setPrepared(false);
      setDelivered(false);
    }, 300000);
    setTimeout(() => {
      setDelivered(true);
      setPrepared(false);
      setOrderReady(false);
    }, 600000);
  };
  //useEffect(() => {
  // setPrepared(true);
  // setOrderReady(false);
  // setDelivered(false);
  // setInterval(() => {
  //   setOrderReady(true);
  //   setPrepared(false);
  //   setDelivered(false);
  // }, 20000);
  // setInterval(() => {
  //   setDelivered(true);
  //   setPrepared(false);
  //   setOrderReady(false);
  // }, 40000);
  //}, []);
  return (
    <View style={Styles.maincontainer}>
      <TouchableOpacity onPress={() => trackOrder()} style={Styles.button}>
        <Text style={Styles.buttonTextStyle}>Track Order Details</Text>
      </TouchableOpacity>
      {prepared && (
        <Text style={Styles.renderDetails}>
          Your Food Order is being Prepared...
        </Text>
      )}
      {orderReady && (
        <Text style={Styles.renderDetails}>
          Food is Ready to be delivered waiting for Delivery agent...
        </Text>
      )}
      {delivered && (
        <Text style={Styles.renderDetails}>
          Your ordered is delivered Thank you !!!
        </Text>
      )}
      <TouchableOpacity
        style={Styles.button}
        onPress={() => navigation.navigate("BottomNavigator")}
      >
        <Text style={Styles.buttonTextStyle}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  maincontainer: {
    display: "flex",
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    padding: 12,
    backgroundColor: "#9d95cd",
    borderRadius: 20,
  },
  buttonTextStyle: { fontSize: 20, fontWeight: "bold" },
  renderDetails: { fontSize: 20, fontWeight: "bold", marginHorizontal: 15 },
});
