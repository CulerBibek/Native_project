import { React, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function MoneyConverter() {
  const [InputData, setInputData] = useState("");
  const [Value, setValue] = useState("");
  const Calculate = () => {
    setValue(InputData * 132);
    setInputData("");
  };
  return (
    <View style={style.body}>
      <>
        <View style={style.centreDiv}>
          <Text style={style.text}> Rs. {Value ? Value : "0"} </Text>
        </View>
        <View style={style.container}>
          <TextInput
            style={style.input}
            onChangeText={(text) => setInputData(text)}
            id="name"
            value={InputData}
            keyboardType="number-pad"
            placeholder="Enter In Euros"
          />
        </View>
        <View style={style.centreDiv}>
          <Text>
            <Button title="Calculate" onPress={Calculate} />
          </Text>
        </View>
      </>
    </View>
  );
}
const style = StyleSheet.create({
  text: {
    fontSize: 21,
    color: "green",
  },
  input: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderWidth: 2,
    borderRadius: 30,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 30,
  },
  bg: {
    zIndex: -999,
    height: "100%",
    width: "100%",
  },
  container: {
    width: "100%",
    alignItems: "flex-end",
  },
  body: {
    width: "100%",
    top: "30%",
  },
  centreDiv: {
    alignItems: "center",
    margin: 30,
  },
});

export default MoneyConverter;
