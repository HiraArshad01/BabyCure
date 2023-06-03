import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Input } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, setOptions } from "firebase/auth";
import { BottomNavBar } from "../component/BottomNavBar";
const More = ({ navigation }) => {




    const dosignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.replace('LoginScreen');
        }).catch((error) => {
            // An error happened.
        });
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 0.90 }}>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => { navigation.navigate('Profile') }}>
                    <Ionicons name="person-circle-outline" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20, justifyContent: 'center' }}>   My Profile</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => { }}>
                    <Ionicons name="bookmark-outline" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20, justifyContent: 'center' }}>   Saved</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => { }}>
                    <Ionicons name="star-outline" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20, justifyContent: 'center' }}>   Rate Us</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => { }}>
                    <Ionicons name="help-outline" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20, justifyContent: 'center' }}>   QnA</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center' }} onPress={() => { }}>
                    <Ionicons name="alert-circle-outline" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>   About Us</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center' }} onPress={() => { }}>
                    <Ionicons name="settings-outline" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>   Setting</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center' }} onPress={() => { }}>
                    <Ionicons name="construct-outline" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>   Serives</Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center' }} onPress={() => { }}>
                    <Ionicons >
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>  </Text>
                    </Ionicons>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'column', justifyContent: 'center' }} onPress={() => { dosignOut() }}>
                    <Ionicons name="md-log-out" size={35} style={{ marginTop: 20, marginLeft: 20 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20 }}>   Logout</Text>
                    </Ionicons>
                </TouchableOpacity>

            </View>
            <BottomNavBar/>
        </View>
    )
}

export default More;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        backgroundColor: '#dcdcdc',
    }
})