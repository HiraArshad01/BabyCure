import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import {Button, Input} from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const CommonProblems = ({navigation}) => {

    return (
        <View style = {styles.container}>
        </View>
    )
}

export default CommonProblems;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})