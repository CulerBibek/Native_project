import React from "react";
import { Text, TouchableOpacity, Alert } from "react-native";

const MyButton = ({ title }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        Alert.alert("Title", "message", [
          {
            text: "Cancel",
          },
          {
            text: "OK",
          },
        ])
      }
    >
      <Text
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
          paddingVertical: 15,
          fontSize: 18,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyButton;
