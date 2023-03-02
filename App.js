import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";


const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Chreyd");

  const change = (arg)=>{
    setName(arg);
  };

  return (

    <View style={styles.container}>
      <Text style={styles.text}>
        Je suis {name}
      </Text>
      <Button title='Clicquez ici' onPress={()=>change('Fleudry')
      }/>
      <Text style={styles.text}>{count}</Text>
      <Button
        title="Augmanter de 1"
        disabled={false}
        onPress={() => setCount(count + 1)}
      />
      <Button
        title="Diminuer de 1"
        color="red"
        onPress={() => setCount(count - 1)}
        disabled={count == 0 ? true : false}
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
    fontWeight: "bold",
    marginBottom: 2,
    color: "#FFF",
  },
  text3: {
    fontSize: 20,
    color: "#0F0",
  },
});

export default App;
