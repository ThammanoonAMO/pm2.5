import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class Aqi extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#FFE0E9" }}>
        <View>
          <Text style={styles.textLine}>Pattaya, Thailand</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={{ width: 250, height: 250 }}
            source={require("../../img//feelBad.png")}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  textLine: {
    textAlign: "center",
    margin: 10,
    fontSize: 35,
    color: "#17D5D2"
  }
});
