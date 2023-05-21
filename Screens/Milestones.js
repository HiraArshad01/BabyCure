import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { Calendar } from "react-native-calendars";
import { Input } from "react-native-elements";


const Milestones = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [newData, setNewData] = useState([]);
    const [newtitle, setNewtitle] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);


    const [showDate, setshowDate] = useState(false);
    const [date, setDate] = useState('');


    let generateRandomNum = () => Math.floor(Math.random() * 1001);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then(response => {
                setData(response);
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);




    console.log(newtitle)

    const checkTextInput = () => {
        //Check for the Name TextInput
        if (!name.trim()) {
            alert('Please Enter Name');
            return;
        }
        else if (!description.trim()) {
            alert('Please Enter Description');
            return;
        }
        else if (date == "") {
            alert('Please Enter Date');
            return;
        }

        onAddMilestone();
        toggleModal();

    };


    const onAddMilestone = () => {

        console.log("in start")
        var newDataObject = {
            id: generateRandomNum,
            title: name,
            details: description,
            dateis: date
        }
        setNewData([...newData, newDataObject])
        console.log("in onadd milestone")
    }

    console.log(newData)

    const onDeleteItem = (title) => {

        const filterData = newData.filter(item => item.title !== title)
        setNewData(filterData)
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);

    };


    const renderItemList = ({ item }) => {

        return (
            <View style={{
                flex: 1, padding: 10, borderRadius: 6, backgroundColor: 'black', flexDirection: 'row', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, height: "5%", width: 370, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 10
            }}>

                <View style={{ flex: 0.90 }}>
                    <Text style={{ color: 'white' }}>{item.title}</Text>
                    <Text style={{ color: 'white' }}>{item.details}</Text>
                    <Text style={{ color: 'white' }}>{item.dateis}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={() => { onDeleteItem(item.title) }}>
                        <Text style={{ fontWeight: '900', fontSize: 24, color: 'white', textAlign: 'right' }}>X</Text>
                    </TouchableOpacity>
                </View>



                {/* <Text style={{ marginLeft: '2%' }}>{isSelected ? onDoneVaccination : '👎'}</Text> */}


            </View>


        )

    }



    return (
        <View style={styles.container}>
            <View style={{ flex: 0.10, flexDirection: 'row', backgroundColor: '#daa520' }}>
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
            <View style={{ flex: 0.10, backgroundColor: 'black', width: "100%", alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                <Image source={require('../assets/Logo.png')}
                    style={{ height: '70%', width: '15%', resizeMode: 'contain' }}
                />
                <Text style={{ fontSize: 24, color: 'white' }}>Baby Cure</Text></View>
            <View style={{ flex: 0.01, backgroundColor: '#daa520', height: '100%', width: '100%' }}></View>
            <View style={{ flex: 0.01, backgroundColor: 'black', height: '100%', width: '100%' }}></View>
            <View style={{ flex: 0.70 }}>


                <FlatList
                    data={newData}
                    renderItem={renderItemList}
                />
            </View>

            <Modal isVisible={isModalVisible}>

                <View style={{ flex: 1, marginTop: 30 }}>

                    <TouchableOpacity onPress={() => { toggleModal() }}>
                        <Text style={{ fontWeight: '900', fontSize: 24, color: 'white', textAlign: 'right' }}>X</Text>
                    </TouchableOpacity>
                    <Text style={{ fontWeight: '900', fontSize: 24, color: 'white', textAlign: 'center' }}>Add Milestone</Text>


                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        placeholder="Enter Milestone name"
                        keyboardType="default"
                        style={{
                            height: 55, borderWidth: 1 / 2,
                            borderRadius: 5,
                            backgroundColor: 'white',
                            fontSize: 18,
                            width: '100%',
                            marginTop: 70

                        }}
                    />
                    <TextInput
                        multiline
                        numberOfLines={4}
                        maxLength={40}
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                        placeholder="Enter Description of milestone"
                        keyboardType="default"
                        style={{
                            height: 55, borderWidth: 1 / 2,
                            borderRadius: 5,
                            backgroundColor: 'white',
                            fontSize: 18,
                            width: '100%',
                            marginTop: 30

                        }}
                    />


                    <TouchableOpacity style={{
                        marginTop: 30,
                    }} onPress={() => setshowDate(true)}>
                        <Input placeholder="Add Milestone Achieved Date" label="Date"
                            leftIcon={{ type: "font-awesome", name: "calendar", color: 'white' }}
                            placeholderTextColor="#6FB3B8" labelTextStyle={{ color: "white" }} value={date}></Input>
                    </TouchableOpacity>

                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { checkTextInput() }} style={{
                        backgroundColor: '#C2EDCE', height: 40, width: 150,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }}><Text>Add Milestone</Text></TouchableOpacity>
                </View>
            </Modal>


            <View style={{ flex: 0.10, paddingLeft: 50 }}>
                <TouchableOpacity style={{ marginLeft: 250, marginRight: 10 }} onPress={() => { toggleModal(); setName(''), setDescription(''), setDate([]) }}>
                    <Ionicons name='ios-add-circle-outline' size={50} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
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

export default Milestones;

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