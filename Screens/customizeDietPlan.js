import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import { TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const customizeDietPlan = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [cause, setCause] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


    return (
        <View style={styles.container}>

            <TextInput editable label="Enter name" keyboardType="default" onChangeText={text => setName(text)} value={name}
                style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 20}} />
            <TextInput editable label="Enter age" keyboardType="numeric" onChangeText={text => setAge(text)} value={age}
                style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 20 }} />
            <TextInput editable label="Enter Weight" keyboardType="decimal-pad" onChangeText={text => setWeight(text)} value={weight}
                style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 20 }} />

            <TextInput editable multiline={true} numberOfLines={4} label="Enter Cause for Requesting Customize Diet Plan"
                maxLength={150} onChangeText={text => setCause(text)} value={cause}
                style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 20 }} />

            <TouchableOpacity style={{
                width: 200, marginTop: 50, backgroundColor: '#741A82', borderRadius: 10, justifyContent: 'center',
                alignItems: 'center', height: 50, shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,
            }}
                onPress={toggleModal}><Text style={{ color: 'white', fontSize: 24 }}>Request</Text></TouchableOpacity>

        <Modal isVisible={isModalVisible}>
                <View style={{ flex: 1 , alignItems: 'center'}}>
                
                <TouchableOpacity  onPress={toggleModal}><Text style={{fontSize:50, color: 'white'}}>X</Text></TouchableOpacity>
                <Text style={{fontSize:20, color: 'white', justifyContent: "center", marginTop: 30}}>Request has been sent!</Text>
                </View>
            </Modal>

        </View>
    )
}

export default customizeDietPlan;

const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#D2AEFF'
    }
})