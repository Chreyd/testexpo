import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
} from "react-native";
import AddProduct from "./components/AddProduct";
import Product from './components/Product';


const App = () => {


  const [myProduct, setMyProduct] = useState([]);
  const submitHandler = (product, setProduct) => {
    const idString = Date.now().toString();
    setMyProduct((currentMyProduct) => [
      { key: idString, name: product },
      ...currentMyProduct,
    ])
    setProduct("")
  };

  return (
    <View style={styles.container}>
      <AddProduct submitHandler={submitHandler} />
      <View>
        <View style={styles.items}>
          <FlatList
            data={myProduct}
            renderItem={({ item }) => (
              <Product name={item.name}/>
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
