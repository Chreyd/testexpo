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
    backgroundColor: "#ff69b4",
    borderRadius: 5

  },
  element: {
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  },
});

export default Product;
