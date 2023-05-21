import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
// import CheckBox from '@react-native-community/checkbox';
import CheckBox from 'expo-checkbox';

const BabyDetails = ({ navigation }) => {

    const [vacc, setVacc] = useState("");
    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState([]);
    const [data1, setData1] = useState([]);
    const [doneVacc, setdoneVacc] = useState([]);
    const [storeKey, setStoreKey] = useState([]);
    const [isSelected, setSelection] = useState(false);

    const [newData, setNewData] = useState([]);
    const [type, setType] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [newtitle, setNewtitle] = useState("");


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
    };

    const onAddVacc = () => {

        if(vacc=="")
        {
            alert("cant add")
        }
        else if(type=="")
        {
            alert('please select Done or upcoming')
        }
        else if(type=="Upcoming")
        {
            var newDataObject = {
                key: generateRandomNum(),
                vaccname: vacc,
                date: date,
                type: type,
            }
            setNewData([...newData, newDataObject])
            setType("")
        }
        else
        {
            onDoneVaccination();
        }
    
    }

    const onDoneVaccination = () => {
        if(item => item.vaccname==vaccname){
            var newDataObject = {
                key: generateRandomNum(),
                vaccname: vacc,
                date: date,
                type: type
            }
            setdoneVacc([...doneVacc, newDataObject])
            setType("")

        }
    

    }

    const onDeleteItem = (vaccname) => {

        const filterData = newData.filter(item => item.vaccname !== vaccname)
        setNewData(filterData)
    }
    const onDeleteItemDone = (vaccname) => {

        const filterData = doneVacc.filter(item => item.vaccname !== vaccname)
        setdoneVacc(filterData)
    }

    const renderItemList = ({ item }) => {

        return (
            <View style={{
                flex: 1, padding: 10, borderRadius: 6, backgroundColor: 'black',flexDirection: 'row', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, height: "5%", width: 370, flexDirection: 'row', alignItems:'center', justifyContent:'center', marginTop: 3
            }}>

                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>
                    <Text style={{marginLeft: 2, color:'white'}}>{item.vaccname}</Text>
                    <Text style={{ paddingLeft: '10%' , color:'white'}}>{item.date}</Text>

                    <TouchableOpacity onPress={()=>{setStoreKey(item.key); onDoneVaccination()}}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={{ marginLeft: 5 }}
                    />
                    </TouchableOpacity>

                    <Text  style={{marginLeft: 10, color:'white'}}>Mark as done?</Text>
                    <TouchableOpacity onPress={() => { onDeleteItem(item.vaccname) }}>
                        <Text style={{ fontWeight: '900', fontSize: 20, marginLeft: 5, color:'white'}}> X</Text>
                    </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
 
                  
                    {/* <Text style={{ marginLeft: '2%' }}>{isSelected ? onDoneVaccination : '👎'}</Text> */}



                </View>
            </View>

        )

    }
    const renderItemListDone = ({ item }) => {

        return (
            <View style={{
                flex:   1 , padding: 10, borderRadius: 6, backgroundColor: 'black',flexDirection: 'row', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, height: "5%", width: 370, flexDirection: 'row', alignItems:'center', justifyContent:'center', marginTop: 3
            }}>

                <View style={{flexDirection: 'row'}}>
                    <Text style={{color:'white'}}>{item.vaccname}</Text>
                    <Text style={{ paddingLeft: '10%',color:'white' }}>{item.date}</Text>
                </View>
          
                <TouchableOpacity onPress={() => {onDeleteItemDone(item.vaccname)}}>
                        <Text style={{ fontWeight: '900', fontSize: 20, marginLeft: 5, color:'white'}}> X</Text>
                </TouchableOpacity>
          
            </View>

        )

    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 0.10, flexDirection: 'row', backgroundColor:'#daa520'}}>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('BabyDetails')}>
                    <Ionicons name='ios-medkit-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('DietPlanWaterIntake')}>
                    <Ionicons name='ios-nutrition-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('Milestones')}>
                    <Ionicons name='ios-trophy-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 40, marginRight: 40 }} onPress={() => navigation.navigate('DoctorConsultancy')}>
                    <Ionicons name='md-pulse' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>
          <View style={{flex: 0.10, backgroundColor:'black', width: "100%", alignItems:'center', justifyContent:'center', flexDirection:'row'}}>
        <Image source={require('../assets/Logo.png')}
                style={{height: '70%', width:'15%', resizeMode:'contain'}} 
                />
            <Text style={{fontSize: 24, color:'white'}}>Baby Cure</Text></View>
            <View style={{flex:0.01, backgroundColor: '#daa520', height: '100%', width:'100%'}}></View>
            <View style={{flex:0.01, backgroundColor: 'black', height: '100%', width:'100%'}}></View>
            <View style={{
                flex: 0.70, backgroundColor:'#dcdcdc', width: '90%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 20, alignItems: 'center', marginTop: '2%'
            }}>

                <View style={{
                    flex: 0.30, marginTop: 10, background: '#6FB3B8', alignItems:'center', width:'100%'
                    
                }}>
                    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'normal' }}>Upcoming Vaccination</Text>
                    <FlatList
                        data={newData}
                        renderItem={renderItemList}
                    />
                </View>


                <View style={{
                    flex: 0.30,  background: '#6FB3B8', alignItems: 'center', marginTop: 10
                }}>
                    <Text style={{ fontSize: 18 , color: 'black', fontWeight: 'normal', 
                    marginTop: 3 }}>Done Vaccination</Text>
                    <FlatList
                        data={doneVacc}
                        renderItem={renderItemListDone}
                    />
                </View>
                
                <View style={{flex:0.20, alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Ionicons name='ios-add-circle-outline' size={50} color='black' />
                    </TouchableOpacity>
                </View>

            </View>

            <Modal isVisible={isModalVisible}>
                <View style={{flex: 1}}>
                    <TouchableOpacity onPress={toggleModal}><Text style={{fontSize: 20, fontWeight: 'bold', color:'white',textAlign: 'right'}}>X</Text></TouchableOpacity>
                <View style={{ flex: 0.60}}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                        (

                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 0.50 }}>
                                    <Text style={{ fontSize: 14, color: 'white', marginTop: 10 }}>{item.vaccname}</Text>
                                </View>

                                <View style={{ flex: 0.50, flexDirection:'row' }}>
                                    <TouchableOpacity onPress={() => { setshowDate(true); setVacc(item.vaccname); setStoreKey(item.key) }} >
                                        <Text style={{ fontSize: 14, color: 'yellow', marginTop: 10, marginLeft: 20 }}>Date</Text>
                                    </TouchableOpacity>
    
                                </View>
                            </View>

                        )
                        }
                    />

                </View>
                <View style={{ flex: 0.30, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{flex: 0.20, flexDirection:'row'}}>
                    <TouchableOpacity  onPress={() => { setType("Done") }} style={{
                        backgroundColor: '#daa520', height: 40, width: 150,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }}><Text style={{color:'black', fontSize: 18}}>Done</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => { setType("Upcoming")}}  style={{
                        backgroundColor: '#daa520', height: 40, width: 150,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10, marginLeft: 15
                    }}><Text style={{color:'black', fontSize: 18}}>Upcoming</Text></TouchableOpacity>
                    </View>
                    <View style={{flex: 0.10, marginTop: 30}}>
                    <TouchableOpacity onPress={() => { toggleModal(); onAddVacc() }} style={{
                        backgroundColor: 'black', height: 40, width: 150,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }}><Text style={{color:'white', fontSize: 18}}>Add Vaccnation</Text></TouchableOpacity>
                    </View>
 
                   
                </View>


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
            <View style={{flex:0.01, backgroundColor: 'black', height: '100%', width:'100%', marginTop: '2%'}}></View>
            <View style={{
                flex: 0.10, width: '100%', backgroundColor: '#daa520', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
            }}>

                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => navigation.navigate('homeScreen')}>
                    <FontAwesomeIcon name="home" size={30} style={{ padding: 10, marginLeft: 39, marginRight: 39 }} ></FontAwesomeIcon>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('AddBaby')}>
                    <FontAwesomeIcon name="plus" size={30} style={{ padding: 10,marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('PhysicalActivities')}>
                    <FontAwesomeIcon name="clipboard" size={30} style={{ padding: 10,marginLeft: 40, marginRight: 40 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('More')}>
                    <MaterialIcons name="more" size={30} style={{ padding: 10,marginLeft: 39, marginRight: 39 }} />
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
        backgroundColor:'white'
    }
})