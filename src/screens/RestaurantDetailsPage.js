import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function RestaurantDetailsPage({ route }) {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);
  const { item } = route.params;
  const menuItem = item.Cuisines.split(", ");
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Image
          source={require("../../assets/OfferSlideImage/image1.png")}
          style={styles.image}
        />
        {/* <Text style={styles.titleStyle}>{item.Restaurant_Name}</Text> */}
        <View style={styles.infoStyle}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.titleStyle}>{item.Restaurant_Name}</Text>
            <Text style={{ marginHorizontal: 10, fontSize: 16 }}>
              Restaurant Open: {item.Is_delivering_now}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.address}>Rating: {item.Aggregate_rating}</Text>
            <Text style={{ marginHorizontal: 10, fontSize: 16 }}>
              Online Deliver: {item.Has_Online_delivery}
            </Text>
          </View>
          <Text>{item.Address}</Text>
        </View>
      </View>
      <FlatList
        data={menuItem}
        renderItem={({ item, index }) => (
          <View style={[styles.cardContainer, styles.icon]}>
            <Text
              style={
                (styles.titleStyle,
                {
                  padding: 15,
                  fontSize: 20,
                  fontWeight: "bold",
                  marginHorizontal: 20,
                })
              }
            >
              {item}
            </Text>
            <AntDesign
              name="pluscircleo"
              size={24}
              color="black"
              style={{ marginVertical: 20 }}
              onPress={() => setCount(count + 1)}
            />
            <Text style={{ marginVertical: 20 }}>{count}</Text>
            <AntDesign
              name="minuscircleo"
              size={24}
              color="black"
              style={{ marginVertical: 20 }}
              onPress={() => setCount(count - 1)}
            />
          </View>
        )}
      />

      <TouchableOpacity
        style={{ alignItems: "center", backgroundColor: "#6666FF" }}
        onPress={() => navigation.navigate("Cart", { item, count })}
      >
        <Text style={styles.textStyle}>Add To Cart</Text>
      </TouchableOpacity>
    </View>
  );
}
const deviceWidth = Math.round(Dimensions.get("window").width);
const styles = StyleSheet.create({
  cardContainer: {
    width: deviceWidth - 20,
    height: "auto",
    borderRadius: 20,
    shadowColor: "#000",
    elevation: 10,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.75,
    marginBottom: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  image: {
    width: deviceWidth - 20,
    height: 300,
    borderRadius: 20,
    opacity: 0.8,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "800",
  },
  address: {
    fontSize: 18,
    fontWeight: "300",
    width: "60%",
  },
  infoStyle: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  icon: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 12,
    justifyContent: "center",
  },
});
