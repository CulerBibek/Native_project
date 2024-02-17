import { StyleSheet, Text, View } from "react-native";
import Homepage from "./German-To-English/Homepage";
import Calculator from "./Calculator/FirstPage";
import Frontpage from "./MyApp/Frontpage";

export default function App() {
  return (
    <>
      <Frontpage />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
  },
});
