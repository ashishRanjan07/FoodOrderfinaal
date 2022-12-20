import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../src/globals/style";
import { Ionicons } from "@expo/vector-icons";
export default function Categories() {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <FontAwesome5
            name="hamburger"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Burger</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="pizza-slice"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Pizza</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="noodles"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Noodles</Text>
        </View>
        <View style={styles.box}>
          <FontAwesome5
            name="coffee"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Coffee</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="tea"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Tea</Text>
        </View>
        <View style={styles.box}>
          <MaterialCommunityIcons
            name="cup-water"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Water</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: colors.text3,
  },
  icon: {
    marginRight: 10,
    color: colors.text3,
  },
  box: {
    backgroundColor: colors.col1,
    elevation: 20,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  head: {
    color: colors.text1,
    fontSize: 25,
    fontWeight: "300",
    margin: 10,
    alignSelf: "center",
    paddingBottom: 5,
    borderBottomColor: colors.text1,
    borderBottomWidth: 1,
  },
  container: {
    backgroundColor: colors.col1,
    width: "90%",
    elevation: 10,
    borderRadius: 10,
  },
});
