import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Button, Input} from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const DIYRemandRec = ({navigation}) => {

    return (
        <View style = {styles.container}>
            <TouchableOpacity  style = {{ width: 400, marginTop: 10, backgroundColor:'#F841CE', borderRadius: 20, justifyContent: 'center',
          alignItems:'center', height: 50, shadowColor: "#000",
          shadowOffset: {width: 0,height: 4,}, shadowOpacity: 0.30,shadowRadius: 4.65, elevation: 8,}} 
          onPress={()=>navigation.navigate('customizeDietPlan')}><Text style={{color: 'black', fontSize: 24}}>Customize Diet Plan</Text></TouchableOpacity>
        </View>
    )
}

export default DIYRemandRec;
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