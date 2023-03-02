import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";

const App = () => {
  const obj = [
    { id: 1, name: "aaaaa", age: 25 },
    { id: 2, name: "bbbb", age: 23 },
    { id: 3, name: "cccc", age: 20 },
    { id: 4, name: "dddd", age: 15 },
    { id: 5, name: "eeee", age: 5 },
    { id: 6, name: "aaaaa", age: 25 },
    { id: 7, name: "bbbb", age: 23 },
    { id: 8, name: "cccc", age: 20 },
    { id: 9, name: "dddd", age: 15 },
    { id: 10, name: "eeee", age: 5 },
    { id: 11, name: "aaaaa", age: 25 },
    { id: 12, name: "bbbb", age: 23 },
    { id: 13, name: "cccc", age: 20 },
    { id: 14, name: "dddd", age: 15 },
    { id: 15, name: "eeee", age: 5 },
    { id: 16, name: "aaaaa", age: 25 },
    { id: 17, name: "bbbb", age: 23 },
    { id: 18, name: "cccc", age: 20 },
    { id: 19, name: "dddd", age: 15 },
    { id: 20, name: "eeee", age: 5 },
  ];
  const [family, setFamily] = useState(obj);

  const display = family.map((x) => {
    return (
      <View key={x.id} style={styles.display}>
        <Text style={styles.text}>{x.name} </Text>
        <Text style={styles.text}>{x.age} </Text>
      </View>
    );
  });

  return (
    <View style={styles.container}>
      <ScrollView>{display}</ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#700",
  },
  display: {
    flexDirection: "row",
    backgroundColor: "#aba",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    color: "#FFF",
  },
  text2: {
    fontSize: 20,
    color: "#0F0",
  },
  textInput: {
    backgroundColor: "#fff",
    height: 30,
    borderRadius: 5,
  },
});

export default App;
