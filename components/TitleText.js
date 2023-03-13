import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const TitleText = ({style, children}) => {
    return (
           <Text style={{...styles.text, ...style}} >{children}</Text> 
    );
}

const styles = StyleSheet.create({
    text:{
        padding: 9,
        fontSize: 30,
    }
})

export default TitleText;
