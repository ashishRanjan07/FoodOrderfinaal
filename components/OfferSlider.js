import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { colors } from "../src/globals/style";

// const carauseldata = [
//   {
//     id: 1,
//     image: "../../assets/offerSlideImage/image1.png",
//   },
//   {
//     id: 2,
//     image: "../../assets/offerSlideImage/image2.png",
//   },
//   {
//     id: 3,
//     image: "../../assets/offerSlideImage/image3.png",
//   },
// ];
export default function OfferSlider() {
  return (
    <View>
      <View style={styles.offerSlider}>
        <Swiper
          autoplay={true}
          autoplayTimeout={2}
          showsButtons={true}
          dotColor={colors.text2}
          activeDotColor={colors.text1}
          nextButton={<Text style={styles.buttonText}>{">"}</Text>}
          prevButton={<Text style={styles.buttonText}>{"<"}</Text>}
        >
          <View style={styles.slide}>
            <Image
              source={require("../assets/OfferSlideImage/image1.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/OfferSlideImage/image2.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require("../assets/OfferSlideImage/image3.png")}
              style={styles.image}
            />
          </View>
        </Swiper>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  offerSlider: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  slide: {
    width: "100%",
    height: 200,
    backgroundColor: colors.col1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
  },
  buttonText: {
    color: colors.text1,
    fontSize: 40,
    fontWeight: "500",
    backgroundColor: "white",
    borderRadius: 20,
    width: 40,
    height: 40,
    textAlign: "center",
    lineHeight: 40,
  },
});
