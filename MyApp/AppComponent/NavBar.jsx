import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

const NavBar = () => {
  {
    return (
      <View style={Design.container}>
        <Text style={{ fontSize: 21 }}>Home</Text>
        <Text style={{ fontSize: 21 }}>Icon</Text>
      </View>
    );
  }
};
const Design = StyleSheet.create({
  container: {
    borderWidth: 3,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 5,
    backgroundColor: "aqua",
    borderRadius: 10,
    height: 50,
  },
});

export default NavBar;
