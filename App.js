import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const App = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nom: {name} </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(val) => setName(val)}
        placeholder="Indiquez votre nom"
      />
      <Text style={styles.text2}>Age: {age} </Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(val) => setAge(val)}
        placeholder="Indiquez votre age"
        keyboardType="numeric"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#700",
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
    width: "80%",
    height: 30,
    borderRadius: 5,
  },
});

export default App;
