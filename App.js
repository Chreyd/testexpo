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
} from "react-native";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";

const App = () => {
  const [myProduct, setMyProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const submitHandler = (product) => {
    if (product != "") {
      const idString = Date.now().toString();
      setMyProduct((currentMyProduct) => [
        { key: idString, name: product },
        ...currentMyProduct,
      ]);
    } else {
      setShowModal(true);
    }
  };

  const deleteProduct = (key) => {
    setMyProduct((currentMyProduct) => {
      return currentMyProduct.filter((product) => product.key != key);
    });
  };

  return (
    <View style={styles.container}  >
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

      <AddProduct submitHandler={submitHandler} />
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
});

export default App;
