import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import * as Notifications from "expo-notifications";
export default function PaymentProfile({ route }) {
  const navigation = useNavigation();

  //   const getPermission = () => {
  //     if(Constants.isDevice){
  //         const {status:existingStaus} = await Notifications.getPermissionsAsync();
  //         let finalStatus = existingStaus;
  //         if(existingStaus !=='granted' ){
  //             const {status} = await Notifications.requestPermissionsAsync();
  //             finalStatus = status;
  //         }
  //         if(finalStatus !== 'granted'){
  //             Alert.alert('Enable push notification to use the app!');
  //             await storage.setItem('expopushtoken',"");
  //             return;
  //         }
  //         const token = (await Notifications.getExpoPushTokenAsync()).data;
  //         await storage.setItem('expopushtoken',token);
  //     }else{
  //         Alert.alert
  //     }
  //   }

  const payment_List = [
    {
      id: 1,
      title: "Online Payment",
      isSelect: false,
    },
    {
      id: 2,
      title: "Net Banking",
      isSelect: false,
    },
    {
      id: 3,
      title: "Payment Through Credit Card / Debit card",
      isSelect: false,
    },
    {
      id: 4,
      title: "Cash On Delivery",
      isSelect: false,
    },
  ];
  const Item = ({ title }) => (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={Styles.mainContainer}>
      <Text style={Styles.title}>All Payment Method</Text>
      <Text style={Styles.method}> Select One of the payment Method</Text>
      <FlatList
        data={payment_List}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
              Alert.alert("Oder Confirmation", "Order successful", [
                {
                  text: "Track Order",
                  onPress: () => {
                    navigation.navigate("TrackOrder");
                  },
                },
              ]);
            }}
          >
            <Item title={item.title} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const screenWidth = Math.round(Dimensions.get("window").width);
const Styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 15,
    padding: 12,
    fontWeight: "bold",
  },
  method: {
    marginHorizontal: 15,
    fontSize: 15,
    fontWeight: "bold",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 12,
    borderRadius: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
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
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
