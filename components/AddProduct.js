import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";

const AddProduct = ({ submitHandler, displayModal, cancelNewProduct }) => {
  const [product, setProduct] = useState("");
  const inputHandler = (val) => {
    setProduct(val);
  };

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Nouveau produit"
          onChangeText={(val) => inputHandler(val)}
          value={product}
          /*         maxLength={9}
        secureTextEntry
        editable={false}
        multiline */
          focusable={true}
        />
        <View style={styles.btnContainer}>
          <View style={styles.btnBlue}>
            <Button title="Valider" onPress={handleClick} />
          </View>
          <View style={styles.btnTomato}>
            <Button
              title="retour"
              onPress={() => cancelNewProduct()}
              color="tomato"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    padding: 10,
    flex: 1,
    justifyContent: "center",
  },
  textInput: {
    borderColor: "grey",
    borderWidth: 1,
    padding: 5,
    paddingLeft: 9,
    fontSize: 18,
    borderRadius: 5,
    marginBottom: 9,
  },
  btnContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
   btnBlue:{
width: '45%'
   },
  btnTomato:{
    width: '45%'
  }
});

export default AddProduct;
