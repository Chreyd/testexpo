import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from "react-native";
import AddProduct from "./components/AddProduct";
import Product from "./components/Product";

const App = () => {
  const [myProduct, setMyProduct] = useState([]);

  const submitHandler = (product, setProduct) => {
    if (product != '') {
      const idString = Date.now().toString();
      setMyProduct((currentMyProduct) => [
        { key: idString, name: product },
        ...currentMyProduct,
      ]);
    }
    else{
      alert('Le champ est vide')
      Alert.alert('Oups!!!','Veuillez Remplir le champ',[
        {
          text: 'COMPRIS',
          onPress: ()=> console.warn('Refusé'),
          style: "destructive"
        },
        {
          text: 'Bien Compris',
          onPress: ()=> console.warn('Refusé'),
          style: "destructive"
        },
        {
          text: 'Bien Compris',
          onPress: ()=> console.warn('Refusé'),
          style: "destructive"
        },
        {
          text: 'Bien Compris',
          onPress: ()=> console.warn('Refusé'),
          style: "destructive"
        }
      ],
      {
        cancelable: true,
        onDismiss: () => console.warn('Dismiss')
      }
    )
    }
  };

  const deleteProduct = (key) => {
    setMyProduct((currentMyProduct) => {
      return currentMyProduct.filter((product) => product.key != key);
    });
  };

  return (
    <View style={styles.container}>
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
    padding: 40,
    paddingTop: 60,
  },
});

export default App;
