import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Keyboard} from 'react-native';

const DismissKeyboard = ({children}) => {
    return (
        <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
            {children}
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({})

export default DismissKeyboard;
