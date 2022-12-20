import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function Cart({ route }) {
  const { item } = route.params;
  const menuItem = item.Cuisines.split(", ");
  console.log(item);

  return (
    <View
      style={{
        marginHorizontal: 10,
        marginVertical: 10,
        borderRadius: 20,

        backgroundColor: "#ffffff",
      }}
    >
      <View style={{ height: "auto", margin: 15, padding: 15 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
          Address
        </Text>
        <Text style={{ fontSize: 18, padding: 10, fontStyle: "italic" }}>
          Village- Bairiya, Post - Bairiya, Opposite of Adarsh Nursing Home Near
          Durga Mandir Pincode - 800007,Patna Bihar India
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Order From</Text>
        <Text style={{ fontSize: 18 }}>
          Restaurant Address : - {item.Address}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            padding: 12,
          }}
        >
          Cuisines Details
        </Text>
        <FlatList
          style={{ padding: 12 }}
          data={menuItem}
          renderItem={({ item, index }) => (
            <View
              style={{
                backgroundColor: "#C1C5FF",
                opacity: 0.8,
                margin: 10,
                display: "flex",
                flexDirection: "row",
                alignContent: "space-between",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  flex: 2.5,
                  padding: 12,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginHorizontal: 10,
                }}
              >
                {item}
              </Text>
              <Text
                style={{
                  flex: 1,
                  padding: 12,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginHorizontal: 10,
                }}
              >
                Rs.1
              </Text>
            </View>
          )}
        />
      </View>
      <View>
        <Text
          style={{
            padding: 6,
            textAlign: "right",
            marginRight: 75,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Total Price :{item.Average_Cost_for_two}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          backgroundColor: "#6666FF",
          marginVertical: 10,
          marginHorizontal: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ padding: 15, fontSize: 20 }}>
          Pay {item.Average_Cost_for_two}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    height: 200,
    marginHorizontal: 20,
    marginVertical: 10,
    elevation: 10,
    backgroundColor: "green",
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    padding: 12,
  },
});
