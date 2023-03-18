import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";



const Milestones = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [newtitle, setNewtitle] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
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


    const onAddMilestone = () => {

        console.log("in start")
        var newDataObject = {
            id: generateRandomNum,
            title: newtitle,
            details: "demo details"
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
                padding: 40, borderRadius: '1', backgroundColor: '#6FB3B8', height: -20, flex: 0.60, flexDirection: 'row', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, height: "5%", width: '100%', flexDirection: 'row'
            }}>

                <View style={{ flex: 0.90, flexDirection: 'row' }}>
                    <Text>{item.title}</Text>
                    <Text style={{ paddingLeft: '10%' }}>{item.date}</Text>
                </View>



                {/* <Text style={{ marginLeft: '2%' }}>{isSelected ? onDoneVaccination : '👎'}</Text> */}

                <TouchableOpacity onPress={() => { onDeleteItem(item.title) }}>
                    <Text style={{ fontWeight: '900', fontSize: '20px', marginTop: '10%' }}> X</Text>
                </TouchableOpacity>

            </View>


        )

    }



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

            <View style={{ flex: 0.70, marginTop: -40 }}>
                <FlatList
                    data={newData}
                    renderItem={renderItemList}
                />
            </View>

            <Modal isVisible={isModalVisible}>

                <View style={{ flex: 1, marginTop: -40 }}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) =>
                        (
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <View style={{ flex: 0.50, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: 'white', marginTop: 10 }}>{item.title}</Text>
                                </View>

                                <View style={{ flex: 0.50, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity style={{
                                        backgroundColor: '#C2EDCE', width: 150,
                                        alignItems: 'center', justifyContent: 'center'
                                    }} onPress={() => { setNewtitle(item.title) }}>Select</TouchableOpacity>
                                </View>
                            </View>

                        )
                        }
                    />



                </View>

                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { toggleModal(); onAddMilestone() }} style={{
                        backgroundColor: '#C2EDCE', height: 40, width: 150,
                        alignItems: 'center', justifyContent: 'center', borderRadius: 10
                    }}>Add Vaccnation</TouchableOpacity>
                </View>
            </Modal>

            <View style={{ flex: 0.10, paddingLeft: 1300 }}>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={toggleModal}>
                    <Ionicons name='ios-add-circle-outline' size={50} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>

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

export default Milestones;

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