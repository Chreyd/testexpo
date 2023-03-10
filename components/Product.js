import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import React from "react";

const Product = ({ name, deleteProduct, idString }) => {
  return (
    <Pressable onPress={() => deleteProduct(idString)}>
      <View style={styles.items}>
        <Text style={styles.element}>{name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
    
  },
  element: {
    backgroundColor: "#ff69b4",
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
    borderRadius: 5
  },
});

export default Product;
