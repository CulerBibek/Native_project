import React, { useState } from "react";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { Libraries } from "./utils/Documentaries";

function Homepage() {
  const [item, setItem] = useState(0);
  const [value, setValue] = useState();
  const [press, setPress] = useState(false);
  const HandleNext = () => {
    setValue("");
    if (item < Libraries.length - 1) {
      setItem((prev) => prev + 1);
    } else {
      setItem(0);
    }
  };
  const HandlePrev = () => {
    setValue("");
    if (item > 0) {
      setItem((prev) => prev - 1);
      console.log(item);
    } else {
      setItem(Libraries.length - 1);
    }
  };
  const Displayer = () => {
    setValue(Libraries[item]?.caste);
  };

  return (
    <>
      {/* Creating My Workspace at the centre of phone  */}

      <View style={Decorator.container}>
        <View>
          <Text style={Decorator.text}>German -- English Alphabets</Text>
        </View>
        <Text style={Decorator.text}> </Text>
        <Text style={Decorator.text}></Text>
        <View style={Decorator.div1}>
          <Text style={Decorator.text}>{Libraries[item]?.name}</Text>
        </View>
        <Button
          style={Decorator.showBtn}
          title="Show Answer"
          onPress={Displayer}
        />
        <View style={Decorator.div2}>
          <Text style={Decorator.text}>{value}</Text>
        </View>
        <Image></Image>
        <View style={Decorator.btnBox}>
          <Button style={Decorator.prevBtn} onPress={HandlePrev} title="Prev" />
          <Button style={Decorator.nextBtn} onPress={HandleNext} title="Next" />
        </View>
      </View>
    </>
  );
}
const Decorator = StyleSheet.create({
  text: {
    fontSize: 21,
  },
  container: {
    borderWidth: 2,
    width: "70%",
  },
  prevBtn: {
    fontSize: 21,
    borderRadius: 4,
    paddingHorizontal: 10,
    borderWidth: 2,
  },
  nextBtn: {
    borderRadius: 4,
    fontSize: 21,
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  btnBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
  div1: {
    margin: 20,
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  div2: {
    margin: 20,
    borderRadius: 15,
    height: 50,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Homepage;
