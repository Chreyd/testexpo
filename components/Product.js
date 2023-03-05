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

const Product = (props) => {
  return (
    <Pressable
      onLongPress={() => console.log(props.name)}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#00F" : "#F00",
        },
      ]}
      delayLongPress={4000}
    >
      <View style={styles.items}>
        <Text style={styles.element}>{props.name}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  items: {
    marginTop: 10,
  },
  element: {
    backgroundColor: "#ffb6c1",
    padding: 20,
    fontSize: 17,
    marginVertical: 6,
  },
});

export default Product;
