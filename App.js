import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Person = (props) => {
  return (
    <>
      {props.age ? (
        <Text style={styles.text}>
          Je suis {props.name} j'ai {props.age} : {props.children}
        </Text>
      ) : (
        <Text style={styles.text}>
          Je suis {props.name} : {props.children}
        </Text>
      )}
    </>
  );
};

const App = () => {
  return (
    <View style={styles.container}>
      <Person name="Chreyd">Homme</Person>
      <Person name="Melly">Femme</Person>
      <Person name="Jerry" age="22ans">Femme</Person>
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
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 2,
    color: "#FFF",
  },
  text3: {
    fontSize: 40,
    color: "#FFF",
  },
});

export default App;
