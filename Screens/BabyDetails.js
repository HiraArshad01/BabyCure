import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Button, Input} from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';


const BabyDetails = ({navigation}) => {

    return (
        <View style = {styles.container}>
            <View style={{flex: 0.20, flexDirection:'row'}}>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}}> 
                    <Ionicons name='ios-medkit-outline' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}} onPress={()=>navigation.navigate('DIYRemandRec')}> 
                    <Ionicons name='ios-nutrition-outline' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}}> 
                    <Ionicons name='ios-trophy-outline' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}} onPress={()=>navigation.navigate('Chat')}> 
                    <Ionicons name='md-pulse' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    )
}

export default BabyDetails;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor:'#FDFFB4'
    }
})