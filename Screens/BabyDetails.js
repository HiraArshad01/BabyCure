import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
import { Button, ButtonGroup, Input } from "react-native-elements";


const BabyDetails = ({ navigation }) => {

    const [vacc, setVacc] = useState('');
    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);
    const [data1, setData1] = useState([]);
    const [storeKey, setStoreKey] = useState([]);


    let generateRandomNum = () => Math.floor(Math.random() * 1001);

    const data = [
        { 'key': '1', 'vaccname': 'BCG' },
        { 'key': '2', 'vaccname': 'OPV-0' },
        { 'key': '3', 'vaccname': 'Hep-B' },
        { 'key': '4', 'vaccname': 'OPV-I' },
        { 'key': '5', 'vaccname': 'Pneumococcal-I' },
        { 'key': '6', 'vaccname': 'Rotavirus-I' },
        { 'key': '7', 'vaccname': 'Pentavalent-I' },
        { 'key': '8', 'vaccname': 'OPV-II' },
        { 'key': '9', 'vaccname': 'Pneumococcal-II' },
        { 'key': '10', 'vaccname': 'Rotavirus-II' },
        { 'key': '11', 'vaccname': 'Pentavalent-II' },
        { 'key': '12', 'vaccname': 'OPV-III' },
        { 'key': '13', 'vaccname': 'Pneumococcal-III' },
        { 'key': '14', 'vaccname': 'IPV-I' },
        { 'key': '15', 'vaccname': 'Pentavalent-III' },
        { 'key': '16', 'vaccname': ' MR-I' },
        { 'key': '17', 'vaccname': 'Typhoid' },
    ]

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);

        console.log(date);
        console.log(vacc);
    };

    const setSelect = () => {
    
       const yesSelected =[
            { 'key': '1' , 'vaccname': vacc, 'date': date },
        ];
        setData1(yesSelected);
    };

    return (
        <View style={styles.container}>


            <View style={{ flex: 0.20, flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('BabyDetails')}>
                    <Ionicons name='ios-medkit-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('DietPlanWaterIntake')}>
                    <Ionicons name='ios-nutrition-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('Milestones')}>
                    <Ionicons name='ios-trophy-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('DoctorConsultancy')}>
                    <Ionicons name='md-pulse' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>
            <View style={{
                flex: 0.70, marginTop: 10, background: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 20
            }}>

                    <FlatList
                        data = {data1}
                        keyExtractor = {item => item.key}
                        renderItem={({ item }) =>
                        (

                            <View style={{flex: 1, flexDirection: 'row' }}>
                                <View style={{flex:0.50}}>
                                <Text style={{ fontSize: 14, color: 'black', marginTop: 10 }}>Name: {item.vaccname}</Text>
                                <Text style={{ fontSize: 14, color: 'black', marginTop: 10 }}>Date: {item.date}</Text>
                                </View>

                            </View>

                        )
                        }
                    />

              


                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={toggleModal}>
                    <Ionicons name='ios-add-circle-outline' size={70} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>

            <Modal isVisible={isModalVisible}>

                <View style={{ flex: 0.50, marginTop: -40}}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                        (

                            <View style={{flex: 1, flexDirection: 'row' }}>
                                <View style={{flex:0.50}}>
                                <Text style={{ fontSize: 14, color: 'white', marginTop: 10 }}>{item.vaccname}</Text>
                                </View>

                                <View style={{flex:0.50}}>
                                <TouchableOpacity onPress={() =>{ setshowDate(true); setVacc(item.vaccname); setStoreKey(item.key)}} >
                                   <Text style={{ fontSize: 14, color: 'yellow', marginTop: 10, marginLeft: '40%' }}>Date</Text>
                                </TouchableOpacity>
                                </View>
                            </View>

                        )
                        }
                    />

                </View>
                        <View style={{alignItems:'center', justifyContent:'center'}}>
                        <TouchableOpacity  onPress={()=>{toggleModal(); setSelect()}} style={{backgroundColor:'#C2EDCE', height:40, width: 150,
                 alignItems: 'center', justifyContent:'center', borderRadius: 10}}>Add Vaccnation</TouchableOpacity>
                        </View>
             
            </Modal>

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
                    <FontAwesomeIcon name="home" size={30} style={{ padding: 10, marginLeft: 140, marginRight: 140 }} ></FontAwesomeIcon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddBaby')}>
                    <FontAwesomeIcon name="plus" size={30} style={{ padding: 10, marginLeft: 140, marginRight: 140 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Activities')}>
                    <FontAwesomeIcon name="clipboard" size={30} style={{ padding: 10, marginLeft: 140, marginRight: 140 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('More')}>
                    <MaterialIcons name="more" size={30} style={{ padding: 10, marginLeft: 140, marginRight: 140 }} />
                </TouchableOpacity>

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
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#C2EDCE'
    }
})