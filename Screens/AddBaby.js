import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, SafeAreaView, } from "react-native";
import { Button, ButtonGroup, Input } from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, setOptions } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Calendar } from "react-native-calendars";
import { RadioGroup, FormControlLabel } from 'react-native-radio-buttons-group';


const AddBaby = ({ navigation }) => {

    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');

    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);

    console.log(date);



    const [radioButtons, setRadioButtons] = useState([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: 'Male',
            value: 'Male'
        },
        {
            id: '2',
            label: 'Female',
            value: 'Female'
        },
        {
            id: '3',
            label: 'Other',
            value: 'Other'
        }
    ]);

    function onPressRadioButton(radioButtonsArray) {
        setRadioButtons(radioButtonsArray);
    }

    useLayoutEffect(() => {
        navigation.setOptions({

            headerLeft: () => (
                <View>

                </View>
            ),


            headerRight: () => (
                <TouchableOpacity onPress={dosignOut}>
                    <Ionicons name='md-log-out' size={32} color='black' />
                </TouchableOpacity>
            )
        })

    }, [])



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


            <Text style={{ fontFamily: "Tahoma", fontSize: '32px' }}>Let's Add a Baby</Text>
            <View style={{
                flex: 0.95, background: '#C2EDCE', width: '50%', height: '100%', marginTop: 10,
                shadowColor: "#000", shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30,
                shadowRadius: 4.65, elevation: 8
            }}>

                <Input color={"white"} style={{
                    marginTop: 10, marginLeft: 20
                }} placeholder="enter name" label="Name"
                    leftIcon={{ type: "font-awesome", name: "user", marginLeft: 20, alignItems: 'center', justifyContent: 'center', }}
                    placeholderTextColor="#6FB3B8" labelColor="black" value={name}
                    onChangeText={text => setName(text)} />

                <TouchableOpacity onPress={() => setshowDate(true)}>
                    <Input style={{
                        marginTop: 10, marginLeft: 20
                    }} placeholder="add Date" label="Date"
                        leftIcon={{ type: "font-awesome", name: "calendar" }}
                        placeholderTextColor="#6FB3B8" labelColor="black" value={date}></Input>
                </TouchableOpacity>

                <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: 'bold', color: '#5f9ea0' }}>Gender</Text>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10 }}> <RadioGroup
                    layout='row'
                    label="Gender"
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                /></View>



                <Input style={{
                    marginTop: 10, marginLeft: 20,
                }}
                    keyboardType={'numbers-and-punctuation'}
                    placeholder="enter Weight" label="weight of baby"
                    leftIcon={{ type: "material", name: "weight" }}
                    placeholderTextColor="#6FB3B8" labelColor="black" value={weight}
                    onChangeText={text => setWeight(text)} />
                
                <Input style={{
                    marginTop: 10, marginLeft: 20,
                }}
                    keyboardType={'numbers-and-punctuation'}
                    placeholder="enter Height" label="Height of baby"
                    leftIcon={{ type: "material", name: "height" }} size={40}
                    placeholderTextColor="#6FB3B8" labelColor="black" value={weight}
                    onChangeText={text => setWeight(text)} />

                <Button title={'Add Baby'} style={{
                    alignItems: 'center', justifyContent: 'center', marginTop: 10
                }} onPress={() => navigation.navigate('homeScreen')}></Button>


            </View>

            <Modal visible={showDate} animationType='fade'>
                <Calendar style={{ margin: 40, elevation: 4, borderRadius: 10 }} onDayPress={text => {
                    setshowDate(false),
                        setDate(text.dateString)
                }}
                //   hideArrows={true}
                ></Calendar>
            </Modal>

        </View>
    )
}

export default AddBaby;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,


    },
    container: {
        flex: 1,
        backgroundColor: '#F6F6F2',
        alignItems: 'center',
        padding: 10,
    }
})