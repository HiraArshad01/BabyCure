import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Button, Input } from "react-native-elements";
import { TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import BottomNavBar from "../component/BottomNavBar";


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
        <>
            <View style={styles.container}>
                <View style={{ flex: 0.90, width: '100%' , padding: 20, alignItems: 'center'}}>
                    <TextInput editable label="Enter name" keyboardType="default" onChangeText={text => setName(text)} value={name}
                        style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 10 , backgroundColor:'#C2EDCE'}} />
                    <TextInput editable label="Enter age" keyboardType="numeric" onChangeText={text => setAge(text)} value={age}
                        style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 10 , backgroundColor:'#C2EDCE'}} />
                    <TextInput editable label="Enter Weight" keyboardType="decimal-pad" onChangeText={text => setWeight(text)} value={weight}
                        style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 10, backgroundColor:'#C2EDCE' }} />

                    <TextInput editable multiline={true} numberOfLines={4} label="Enter Cause for Requesting Customize Diet Plan"
                        maxLength={150} onChangeText={text => setCause(text)} value={cause}
                        style={{ padding: 10, borderWidth: 1, width: "100%", marginTop: 10 , backgroundColor:'#C2EDCE'}} />

                    <TouchableOpacity style={{
                        width: 200, marginTop: 30, backgroundColor: '#6FB3B8', borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', height: 50, shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,
                    }}
                        onPress={toggleModal}><Text style={{ color: 'white', fontSize: 24 }}>Request</Text></TouchableOpacity>



                    <Modal isVisible={isModalVisible}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal}><Text style={{ fontSize: 50, color: 'white' }}>X</Text></TouchableOpacity>
                            <Text style={{ fontSize: 40, color: 'white', justifyContent: "center", marginTop: 20 }}>Request has been sent!</Text>
                        </View>
                    </Modal>


                </View>
               <View style={{ flex: 0.10, width: '100%', height: 100, backgroundColor: '#388087' , shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                         elevation: 8, flexDirection:'row',marginTop:30, alignItems:'center',justifyContent:'center'}}>

                    <TouchableOpacity style={{flexDirection:'column'}}onPress={()=>navigation.navigate('homeScreen')}>
                        <FontAwesomeIcon name="home" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}} ></FontAwesomeIcon>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('AddBaby')}>
                        <FontAwesomeIcon name="plus" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Activities')}>
                        <FontAwesomeIcon name="clipboard" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('More')}>
                        <MaterialIcons name="more" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}}/>
                    </TouchableOpacity>

                </View> 


            </View>





        </>
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
        backgroundColor: '#F6F6F2'
    }
})