import React, { useState, useEffect, useRef, searchRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
import { ScrollView } from "react-native-gesture-handler";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'expo-checkbox';

const Mother = ({ navigation }) => {

    const [vacc, setVacc] = useState("");
    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);
    const [data1, setData1] = useState([]);
    const [doneVacc, setdoneVacc] = useState([]);
    const [storeKey, setStoreKey] = useState([]);
    const [isSelected, setSelection] = useState(false);
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [newtitle, setNewtitle] = useState("");


    let generateRandomNum = () => Math.floor(Math.random() * 1001);

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    return (
        <View style={styles.container}>

            <View style={{ flex: 0.10, backgroundColor: 'black', width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Image source={require('../assets/Logo.png')}
                    style={{ height: '70%', width: '15%', resizeMode: 'contain' }}
                />
                <Text style={{ fontSize: 24, color: 'white' }}>Baby Cure</Text></View>
            <View style={{ flex: 0.01, backgroundColor: '#daa520', height: '100%', width: '100%' }}></View>
            <View style={{ flex: 0.01, backgroundColor: 'black', height: '100%', width: '100%' }}></View>
            <View style={{ flex: 0.01, backgroundColor: '#daa520', height: '100%', width: '100%' }}></View>
            <View style={{ flex: 0.01, backgroundColor: 'black', height: '100%', width: '100%' }}></View>

            <View style={{ flex: 0.10, flexDirection: 'row', backgroundColor:'#daa520', alignItems: 'center', justifyContent: 'center', }}>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('Mother')}>
                    <Ionicons name='fast-food-outline' size={40} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('Quotes')}>
                    <Ionicons name="create-outline" size={40} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>




            <View style={{
                flex: 0.55, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 20, alignItems: 'center', backgroundColor: '#dcdcdc', width: '80%', height: '100%',
                marginTop: 20, alignSelf: 'center'
            }} >
                <ScrollView style={{ margin: 30 }}>
                    <Text style={{ fontSize: 14, marginLeft: 2, marginRight: 2, marginTop: 2 }}>
                        An infant needs 18 – 32 ounces of breast milk in his first 3 months.
                        You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately.
                        You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.
                        If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age.
                        An infant needs 18 – 32 ounces of breast milk in his first 3 months.
                        You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately.
                        You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.
                        If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age.
                        An infant needs 18 – 32 ounces of breast milk in his first 3 months.
                        You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately.
                        You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.
                        If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age.
                    </Text>
                </ScrollView>
            </View>

            <View style={{ flex: 0.10 }}>

                <TouchableOpacity style={{
                    width: 200, marginTop: 10, backgroundColor: 'black', borderRadius: 20, justifyContent: 'center',
                    alignItems: 'center', height: 50, shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8, alignSelf:'center'
                }}
                    onPress={() => navigation.navigate('customizeDietPlan')}><Text style={{ color: 'white', fontSize: 20 }}>Customize Diet Plan</Text></TouchableOpacity>


            </View>




            <Modal visible={showDate} animationType='fade'>
                <Calendar style={{ margin: 40, elevation: 4, borderRadius: 10 }} onDayPress={text => {
                    setshowDate(false),
                        setDate(text.dateString)
                }}
                //   hideArrows={true}
                ></Calendar>
            </Modal>

            <View style={{ flex: 0.01, backgroundColor: 'black', height: '100%', width: '100%', marginTop: '2%' }}></View>
            <View style={{
                flex: 0.10, width: '100%', backgroundColor: '#daa520', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
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

export default Mother;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        backgroundColor: '#C2EDCE'
    }
})