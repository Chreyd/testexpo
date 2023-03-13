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
  ImageBackground,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useFonts, Bangers_400Regular } from "@expo-google-fonts/bangers";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";
import DismissKeyboard from "./components/DismissKeyboard";
import ButtonComponent from "./components/ButtonComponent";
import Header from "./components/Header";
import colors from "./constants/colors";

// const fetchFonts = () => {
//   return Font.loadAsync({
//     "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
//     "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
//     "pacifico-Regular": require("./assets/fonts/Pacifico-Regular.ttf"),
//   });
// };

const App = () => {
  const [myProduct, setMyProduct] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  // const [fontsLoaded, setFontsLoaded] = useState(false);

  const [fontsLoaded] = useFonts({
    BangersRegular: Bangers_400Regular,
    "inter-bold": require("./assets/fonts/Inter-Bold.ttf"),
    "inter-regular": require("./assets/fonts/Inter-Regular.ttf"),
    "pacifico-Regular": require("./assets/fonts/Pacifico-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
      <ImageBackground
        style={styles.bgImage}
        source={require("./assets/image/image2.jpg")}
      >
        <Header />
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
                  <Image
                    source={require("./assets/image/close.png")} /* source={{uri:'https://cdn.pixabay.com/photo/2013/07/12/13/50/road-sign-147409_960_720.png'}} style={styles.imageStyle} */
                  />
                  <Text style={styles.modalBodyText}>
                    Veuillez saisir des données valides
                  </Text>
                </View>
                <View style={styles.modalFooter}>
                  <ButtonComponent
                    style={styles.pressableBtnModal}
                    onPressHandler={() => setShowModal(false)}
                    btnTitle="Ok"
                  />
                  {/*                 <TouchableOpacity
                  style={styles.pressableBtnModal}
                  onPress={() => setShowModal(false)}
                >
                  <Text style={styles.modalBtn}>Ok</Text>
                </TouchableOpacity> */}
                </View>
              </View>
            </View>
          </Modal>

          <ButtonComponent
            btnTitle="Nouveau produit"
            onPressHandler={() => setDisplayModal(true)}
            style={styles.addProductBtn}
          />
          {/* <Button title="Nouveau produit" onPress={() => setDisplayModal(true)} /> */}

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
      </ImageBackground>
    </DismissKeyboard>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
  },
  bgImage: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  modalContet: {
    backgroundColor: colors.white,
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
    borderBottomColor: colors.secondary,
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
  imageStyle: {
    height: 100,
    width: 100,
  },
  addProductBtn: {
    backgroundColor: colors.success,
    padding: 20,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 20,
  },
});



export default App;
