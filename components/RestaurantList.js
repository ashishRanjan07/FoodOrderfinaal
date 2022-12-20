import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function RestaurantList({ restaurants }) {
  const navigation = useNavigation();

  const renderList = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RestaurantDetailsPage", { item })}
        >
          <Image
            source={require("../assets/OfferSlideImage/image1.png")}
            style={styles.image}
          />
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
              <Text style={styles.address}>
                Rating: {item.Aggregate_rating}
              </Text>
              <Text style={{ marginHorizontal: 10, fontSize: 16 }}>
                Online Deliver: {item.Has_Online_delivery}
              </Text>
            </View>
            <Text>{item.Address}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <FlatList data={restaurants} renderItem={renderList} />
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
  },
  image: {
    width: deviceWidth - 20,
    height: 130,
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
});
