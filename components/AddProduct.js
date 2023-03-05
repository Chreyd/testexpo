import React ,{useState} from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const AddProduct = (props) => {


  const [product, setProduct] = useState("");
  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick= ()=>{
    props.submitHandler(product);
    setProduct('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Nouveau produit"
        onChangeText={(val) => inputHandler(val)}
        value={product}
      />
      <Button title="Valider" onPress={handleClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    paddingBottom: 10,
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
});

export default AddProduct;
