import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Modal,
  ImageBackground,
} from "react-native";
import ButtonComponent from "./ButtonComponent";
import Input from "./Input";
import Colors from "../constants/colors";

const AddProduct = ({ submitHandler, displayModal, cancelNewProduct }) => {
  const [product, setProduct] = useState("");
  const inputHandler = (val) => {

    const regex = /[^a-z]/gi;
    setProduct(val.replace(regex, ''));

  };

  const handleClick = () => {
    submitHandler(product);
    setProduct("");
  };

  return (
    <Modal visible={displayModal} animationType="slide">
      <ImageBackground
        style={styles.inputContainer}
        source={require("../assets/image/image2.jpg")}
      >
        <Input
          style={styles.textInput}
          textPlaceholder="Nouveau produit"
          onChangeHandler={inputHandler}
          inputValue={product}
          maxLength={15}
        />

        <View style={styles.btnContainer}>
          <ButtonComponent
            onPressHandler={handleClick}
            btnTitle="Valider"
            style={styles.btnBlue}
          />
          <ButtonComponent
            onPressHandler={cancelNewProduct}
            btnTitle="Annuler"
            style={styles.btnTomato}
          />
          {/*           <View style={styles.btnBlue}>
            <Button title="Valider" onPress={handleClick} />
          </View>
          <View style={styles.btnTomato}>
            <Button
              title="retour"
              onPress={() => cancelNewProduct()}
              color="tomato"
            />
          </View> */}
        </View>
      </ImageBackground>
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
    padding: 5,
    fontSize: 19,
    borderRadius: 30,
    marginBottom: 15,
    textAlign: "center",
    height: 50,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnBlue: {
    backgroundColor: "seagreen",
    width: 150,
    borderRadius: 5,
  },
  btnTomato: {
    width: 150,
    borderRadius: 5,
    backgroundColor: "tomato",
  },
});

export default AddProduct;
