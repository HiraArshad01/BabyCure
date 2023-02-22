import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Button, Input } from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, setOptions } from "firebase/auth";
import Ionicons from '@expo/vector-icons/Ionicons';


import { auth } from "../firebase";
import { Calendar } from "react-native-calendars";



const AddBaby = ({ navigation }) => {

    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [weight, setWeight] = useState('');

    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);

    console.log(date);



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

    const change = () =>{
            setDate(date.dateString);
    }

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
                flex: 0.90, background: '#7E4DA7', width: '50%', height: '100%', marginTop: '10px', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,
            }}>
                <Input color={"white"} style={{ marginTop: '20px' }} placeholder="enter name" label="Name" leftIcon={{ type: "font-awesome", name: "user" }}
                    placeholderTextColor="white" labelColor="white" value={name}
                    onChangeText={text => setName(text)} />
                <TouchableOpacity onPress={() => setshowDate(true)}>
                    <Input style={{ marginTop: '20px' }} placeholder="add Date" label="Date" leftIcon={{ type: "font-awesome", name: "calendar" }}
                        placeholderTextColor="white" labelColor="white" value={date}  onChangeText={item => setDate(item.dateString)}></Input>
                </TouchableOpacity>

                <Input style={{ marginTop: '20px' }} placeholder="Select Gender" label="Gender" leftIcon={{ type: "font-awesome", name: "venus-mars" }}
                    placeholderTextColor="white" labelColor="white" value={gender}
                    onChangeText={text => setGender(text)} />
                <Input style={{ marginTop: '20px' }} placeholder="enter Weight" label="weight of baby" leftIcon={{ type: "font-awesome", name: "scale-balanced" }}
                    placeholderTextColor="white" labelColor="white" value={weight}
                    onChangeText={text => setWeight(text)} />
                <Button title='Add Baby' style={{ alignItems: 'center', marginTop: 20 }} onPress={() => navigation.navigate('homeScreen')} />
            </View>

            <Modal visible={showDate} animationType='fade'>
                <Calendar style={{ margin: 40, elevation: 4, borderRadius: 10 }} onDayPress={text => {
                    setshowDate(false),
                        setDate(text)
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
        backgroundColor: '#D2AEFF',
        alignItems: 'center',
        padding: 10,
    }
})