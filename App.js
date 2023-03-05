import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  VirtualizedList,
} from "react-native";

const App = () => {
  const [product, setProduct] = useState("");
  const inputHandler = (val) => {
    setProduct(val);
  };

  const [myProduct, setMyProduct] = useState([]);
  const submitHandler = () => {
    setMyProduct((currentMyProduct) => [...currentMyProduct, product]);
    setProduct("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={(val) => inputHandler(val)}
          value={product}
        />
        <Button title="Valider" onPress={submitHandler} />
      </View>
      <ScrollView>
        <View style={styles.items}>
          {myProduct.map((produit, index) => (
            <Text key={index} style={styles.element}>
              {produit}
            </Text>
          ))}
        </View>
        <Text> {product} </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60,
  },
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 10
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    borderRadius: 5,
    flexGrow: 1,
  },
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "#ffb6c1",
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  },
});

export default App;
