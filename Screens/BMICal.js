import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Modal } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { borderRadius } from "@mui/system";
import { RadioGroup, FormControlLabel } from 'react-native-radio-buttons-group';
import { Calendar } from "react-native-calendars";

const BMICal = ({ navigation }) => {

    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');
    const [description, setDescription] = useState('');
    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);


    const calculateBmi = () => {

        const bmi = [(weight / height / height)] * 10000;


        setBmi(bmi.toFixed(1))

        //Check for the Email TextInput
        if (date == "") {
            alert('Please Enter Date');
            return;
        }
        if (!weight.trim()) {
            alert('Please Enter Weight');
            return;
        }
        if (!height.trim()) {
            alert('Please Enter Height');
            return;
        }
        if (bmi < 18.5) {
            setDescription("UnderWeight, eat more");
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            setDescription("Normal, keep it up");
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            setDescription("Overweight, start working out");
        }
        else if (bmi >= 30) {
            setDescription("Obsese, Hit the gym");
        }
    }



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



    return (
        <View style={styles.container}>
            <View style={{ flex: 0.80 }}>

                <TextInput
                    value={weight}
                    onChangeText={(text) => setWeight(text)}
                    placeholder="Weight in kgs"
                    keyboardType="numeric"
                    style={{
                        height: 55, margin: 15, borderWidth: 1 / 2,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#cde0e9',
                        fontSize: 18,
                        width: '100%'
                    }}
                />
                <TextInput
                    value={height}
                    onChangeText={(text) => setHeight(text)}
                    placeholder="Height in cms"
                    keyboardType="numeric"
                    style={{
                        height: 55, margin: 15, borderWidth: 1 / 2,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#cde0e9',
                        fontSize: 18,
                        width: '100%'
                    }}
                />

                <TouchableOpacity onPress={() => setshowDate(true)}>
                    <TextInput style={{
                        height: 55, margin: 15, borderWidth: 1 / 2,
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: '#cde0e9',
                        fontSize: 18,
                        width: '100%'
                    }}
                        placeholder="Add Birth Date"
                        value={date} />
                </TouchableOpacity>


                <RadioGroup
                    layout='row'
                    label="Gender"
                    radioButtons={radioButtons}
                    onPress={onPressRadioButton}
                />

                <TouchableOpacity
                    style={{
                        height: 55, margin: 15, borderWidth: 1 / 2,
                        borderRadius: 5, backgroundColor: '#68B2A0', justifyContent: 'center', alignItems: 'center', width: '100%'
                    }}
                    onPress={calculateBmi}
                >
                    <Text style={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}>Calculate BMI</Text>
                </TouchableOpacity>

            </View>

            <View style={{ flex: 0.10, margin: 15, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30, color: '#2c6975', fontWeight: 'bold' }}>{bmi}</Text>
                <Text style={{ fontSize: 30, color: '#909E84', fontWeight: 'bold' }}>{description}</Text>
            </View>



            <Modal visible={showDate} animationType='fade'>
                <Calendar style={{ margin: 40, elevation: 4, borderRadius: 10 }} onDayPress={text => {
                    setshowDate(false),
                        setDate(text.dateString)
                }}
                //   hideArrows={true}
                ></Calendar>
            </Modal>
            <View style={{
                flex: 0.10, width: '100%', height: 100, backgroundColor: '#388087', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center'
            }}>



                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => navigation.navigate('homeScreen')}>
                    <FontAwesomeIcon name="home" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} ></FontAwesomeIcon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddBaby')}>
                    <FontAwesomeIcon name="plus" size={30} style={{ padding: 10, marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PhysicalActivities')}>
                    <FontAwesomeIcon name="clipboard" size={30} style={{ padding: 10, marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('More')}>
                    <MaterialIcons name="more" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default BMICal;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
})