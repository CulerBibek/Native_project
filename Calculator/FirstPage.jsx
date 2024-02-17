import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [int, setInt] = useState(0);
  const Calculator = () => {
    return <></>;
  };
  return (
    <>
      <View style={Style.container}>
        <View>
          <Text style={Style.value}>{value}</Text>
        </View>
        <View>
          <View style={Style.firstrow}>
            <Text
              style={Style.numbers}
              onPress={() => {
                setValue("0");
              }}
            >
              AC
            </Text>
            <Text
              onPress={() => {
                setValue("0");
              }}
              style={Style.numbers}
            >
              Del
            </Text>
            <Text style={Style.numbers}>%</Text>
            <Text style={Style.numbers}>/</Text>
          </View>
          <View style={Style.secondrow}>
            <Text
              onPress={() => {
                setValue(value + 7);
                setInt(int * 10 + 7);
              }}
              style={Style.numbers}
            >
              7
            </Text>
            <Text
              onPress={() => {
                setInt(int * 10 + 8);
                setValue(value + 8);
              }}
              style={Style.numbers}
            >
              8
            </Text>
            <Text
              onPress={() => {
                setInt(int * 10 + 9);
                setValue(value + 9);
              }}
              style={Style.numbers}
            >
              9
            </Text>
            <Text style={Style.numbers}>x</Text>
          </View>
          <View style={Style.thirdrow}>
            <Text
              onPress={() => {
                setValue(value + 4);
                setInt(int * 10 + 4);
              }}
              style={Style.numbers}
            >
              4
            </Text>
            <Text
              onPress={() => {
                setInt(int * 10 + 5);
                setValue(value + 5);
              }}
              style={Style.numbers}
            >
              5
            </Text>
            <Text
              onPress={() => {
                setInt(int * 10 + 6);
                setValue(value + 6);
              }}
              style={Style.numbers}
            >
              6
            </Text>
            <Text
              onPress={() => {
                setValue(value + "-");
              }}
              style={Style.numbers}
            >
              -
            </Text>
          </View>
          <View style={Style.thirdrow}>
            <Text
              onPress={() => {
                setValue(value + 1);
                setInt(int * 10 + 1);
              }}
              style={Style.numbers}
            >
              1
            </Text>
            <Text
              onPress={() => {
                setValue(value + 2);
                setInt(int * 10 + 2);
              }}
              style={Style.numbers}
            >
              2
            </Text>
            <Text
              onPress={() => {
                setValue(value + 3);
                setInt(int * 10 + 3);
              }}
              style={Style.numbers}
            >
              3
            </Text>
            <Text
              onPress={() => {
                setValue(value + "+");
              }}
              style={Style.numbers}
            >
              +
            </Text>
          </View>

          <View style={Style.lastrow}>
            <Text
              onPress={() => {
                setValue(value + 0);
              }}
              style={Style.numbers}
            >
              0
            </Text>
            <Text
              onPress={() => {
                setValue(value + ".");
              }}
              style={Style.numbers}
            >
              {" "}
              .
            </Text>
            <Text style={Style.lastitem}>Ans</Text>
          </View>
        </View>
      </View>
    </>
  );
};
const Style = StyleSheet.create({
  numbers: {
    fontSize: 50,
  },
  value: {
    fontSize: 50,
    marginLeft: "auto",
  },
  container: {
    display: "flex",
    borderWidth: 2,
    width: "100%",
    borderTopWidth: 0,
    marginTop: "95%",
  },
  firstrow: {
    borderTopWidth: 2,
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  secondrow: {
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  thirdrow: {
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lastrow: {
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  lastitem: {
    fontSize: 50,
  },
});
export default Calculator;
