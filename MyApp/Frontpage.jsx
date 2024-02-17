import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import MyButton from "./AppComponent/MyButton";
import NavBar from "./AppComponent/NavBar";
import Indexbody from "./AppComponent/Indexbody";

const Frontpage = () => {
  return (
    <>
      <StatusBar backgroundColor="green" style={Design.status} />
      <NavBar style={{ position: "sticky" }} />
      <Indexbody />
    </>
  );
};
const Design = StyleSheet.create({
  text: {
    fontSize: 21,
  },
  status: {
    borderRadius: 75,
    width: "50%",
  },
});

export default Frontpage;
