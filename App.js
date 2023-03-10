import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  Modal,
  Text,
  Pressable,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import DismissKeyboard from "./components/DismissKeyboard";

const App = () => {
  const [myProduct, setMyProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);

  const submitHandler = (product) => {

    if (product != "") {
      const idString = Date.now().toString();
      setDisplayModal(false);
      setMyProduct((currentMyProduct) => [
        { key: idString, name: product },
        ...currentMyProduct,
      ]);
    } else {
      setShowModal(true);
      setDisplayModal(false);

    }
  };

  const cancelNewProduct = () => {
    setDisplayModal(false);
  };

  const deleteProduct = (key) => {
    setMyProduct((currentMyProduct) => {
      return currentMyProduct.filter((product) => product.key != key);
    });
  };

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Modal
          visible={showModal}
          onRequestClose={() => setShowModal(false)}
          animationType="slide"
          hardwareAccelerated={true}
          transparent
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContet}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalHeaderText}>OUPS!!!</Text>
              </View>
              <View style={styles.modalBody}>
                <Image source={require('./assets/image/close.png')}  /* source={{uri:'https://cdn.pixabay.com/photo/2013/07/12/13/50/road-sign-147409_960_720.png'}} style={styles.imageStyle} */ />
                <Text style={styles.modalBodyText}>
                  Veuillez saisir des données valides
                </Text>
              </View>
              <View style={styles.modalFooter}>
                <TouchableOpacity
                  style={styles.pressableBtnModal}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.modalBtn}>Ok</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Button title="Nouveau produit" onPress={() => setDisplayModal(true)} />

        <AddProduct
          submitHandler={submitHandler}
          displayModal={displayModal}
          cancelNewProduct={cancelNewProduct}
        />
        <View>
          <View style={styles.items}>
            <FlatList
              data={myProduct}
              renderItem={({ item }) => (
                <Product
                  name={item.name}
                  deleteProduct={deleteProduct}
                  idString={item.key}
                />
              )}
            />
          </View>
        </View>
      </View>
    </DismissKeyboard>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    paddingTop: 60,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContet: {
    backgroundColor: "#fff",
    width: "90%",
    height: 250,
    borderRadius: 10,
    alignItems: "center",
  },
  modalHeader: {
    // backgroundColor: 'grey',
    width: "100%",
    padding: 16,
    alignItems: "center",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
  modalHeaderText: {
    color: "grey",
    fontSize: 17,
  },
  modalBody: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: "100%",
  },
  pressableBtnModal: {
    backgroundColor: "lightseagreen",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    // alignItems: 'center'
  },
  modalBtn: {
    fontSize: 17,
    color: "#fff",
    textAlign: "center",
    padding: 16,
  },
  imageStyle:{
    height: 100,
    width: 100
  },
});

export default App;
