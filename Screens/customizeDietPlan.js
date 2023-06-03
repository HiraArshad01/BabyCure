import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Button, ButtonGroup, Input, Icon } from "react-native-elements";
import Ionicons from '@expo/vector-icons/Ionicons';
import { LogoBar } from "../component/LogoBar";
import { BottomNavBar } from "../component/BottomNavBar";


const customizeDietPlan = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [cause, setCause] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        //Check for the Email TextInput
        if (!height.trim()) {
            alert('Please Enter Height');
            return;
        }
        if (!weight.trim()) {
            alert('Please Enter Weight');
            return;
        }
        if (!cause.trim()) {
            alert('Please Enter Cause');
            return;
        }
        //Checked Successfully
        //Do whatever you want
        setName("");
        setWeight("");
        setHeight("");
        setCause("");
        toggleModal();
    };



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <>
            <View style={styles.container}>

                <LogoBar/>


                <View style={{ flex: 0.80, width: '90%', alignItems: 'center' }}>
                    <Input placeholder="enter name" label="Name" leftIcon={{ type: "font-awesome", name: "user" }} value={name}
                        onChangeText={text => setName(text)} />


                    <View style={{ flexDirection: 'row' }}>

                        <Input
                            keyboardType={"decimal-pad"}
                            placeholder="enter weight" label="Weight of baby"
                            leftIcon={<Ionicons name="barbell-outline" size={25}></Ionicons>}
                            placeholderTextColor="#6FB3B8" labelColor="black" value={weight}
                            onChangeText={text => setWeight(text)} />
                        <Text style={{ marginTop: '12%', fontSize: 14 }}>Kg</Text>
                    </View>


                    <View style={{ flexDirection: 'row' }}>

                        <Input
                            keyboardType={"decimal-pad"}
                            placeholder="enter height" label="Height of baby"
                            leftIcon={{ type: "material", name: "height" }} size={40}
                            placeholderTextColor="#6FB3B8" labelColor="black" value={height}
                            onChangeText={text => setHeight(text)} />
                        <Text style={{ marginTop: '12%', fontSize: 14 }}>Cm</Text>
                    </View>
                    <Input keyboardType={"default"} placeholder="Cause of Customize Diet Plan" label="Cause" leftIcon={{ type: "material", name: "description" }} value={cause}
                        onChangeText={text => setCause(text)} />

                    <TouchableOpacity style={{
                        width: 200, marginTop: 10, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center',
                        alignItems: 'center', height: 50, shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,
                    }}
                        onPress={checkTextInput}><Text style={{ color: 'white', fontSize: 24 }}>Request</Text></TouchableOpacity>



                    <Modal isVisible={isModalVisible}>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <TouchableOpacity onPress={toggleModal}><Text style={{ fontSize: 50, color: 'white' }}>X</Text></TouchableOpacity>
                            <Text style={{ fontSize: 40, color: 'white', justifyContent: "center", marginTop: 20 }}>Request has been sent!</Text>
                        </View>
                    </Modal>

                </View>
             <BottomNavBar/>
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
        backgroundColor: '#dcdcdc'
    }
})