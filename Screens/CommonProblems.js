import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchComp from "../component/SearchComp";
import { SelectMultiple } from 'react-native-select-multiple'
import { TextInput } from "react-native-paper";
import Modal from "react-native-modal";

const CommonProblems = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedMonth, setSelectedMonth] = React.useState([]);
    const [selectedName, setSelectedName] = React.useState([]);
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const listRef = useRef();

    const [ind, setInd] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false);


console.log(selectedMonth);
console.log(selectedMonth);
    const onSearch = (text) => {

        if (text == '') {
            setData(oldData);
        }
        else {
            let tempList = data.filter(item => {
                return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
            })
            setData(tempList);

        }

    }
    const toggleModal = () => {
        setModalVisible(!isModalVisible);

    };

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then(response => {
                setData(response);
                setOldData(response)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View style={styles.container}>
            <View style={{ flex: 0.20, flexDirection: 'row' }}>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('BabyDetails')}>
                    <Ionicons name='ios-medkit-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('DietPlanWaterIntake')}>
                    <Ionicons name='ios-nutrition-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }}>
                    <Ionicons name='ios-trophy-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('Chat')}>
                    <Ionicons name='md-pulse' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>

            <View style={{ flex: 0.10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Ionicons name='ios-search' size={25} color='black' style={{ margin: 5 }} />
                <TextInput
                    ref={searchRef}
                    placeholder="search item here...."
                    style={{ width: '90%', height: '70%', borderBottomWidth: 0 }}
                    value={search}
                    onChangeText={text => {
                        onSearch(text)
                        setSearch(text)
                    }}

                >
                </TextInput>
                {
                    search == '' ? null : (
                        <TouchableOpacity onPress={() => {
                            searchRef.current.clear()
                            onSearch('')
                            setSearch('')

                        }}>

                            <Ionicons name='ios-close' size={25} color='black' style={{ margin: 5 }} />

                        </TouchableOpacity>
                    )
                }

                <TouchableOpacity onPress={() => {
                    toggleModal(true);
                }}>

                    <MaterialIcons name="tune" size={30} style={{ padding: 10, marginLeft: 10 }} />
                </TouchableOpacity>
            </View>

            
            <Modal 
                  transparent={true}
                  animationType="slide"
            isVisible={isModalVisible}
      
            >
                <View style={{ flex: 1 , justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,.1)'}}>
                    <View style={{width:'80%', height: 200, borderRadius: 10, backgroundColor:'#fff'}}>
                        <TouchableOpacity style={{with: '100%', height: 100, borderBottomWidth: 0.5,
                         justifyContent: 'center', paddingLeft: 20 }}
                        onPress={()=>{
                            let tempList= data.sort((a,b)=>
                            a.title>b.title? 1 : -1);
                            toggleModal();
                            listRef.current.scrollToIndex({animated:true, index: 0})
                            setData(tempList);
                            setSelectedMonth("Sort By Month")
                        }}
                        >
                            <Text>Sort By Month</Text>
                        </TouchableOpacity>
                        
             
                        <TouchableOpacity style={{with: '100%', height: 100, borderBottomWidth: 0.5,
                         justifyContent: 'center', paddingLeft: 20 }}
                        onPress={()=>{
                            let tempList= data.sort((a,b)=>
                            a.title>b.title? 1 : -1);
                            toggleModal();
                            setData(tempList);
                            listRef.current.scrollToIndex({animated:true, index: 0})
                            setSelectedName("Sort By Name")
                        }}
                        >
                            <Text>Sort By Name</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
            </Modal>

            <View style={{flex:0.10, width: '100%', height: '100%', flexDirection: 'row', margin: '2%'}}>
                <Text style={{ height: 20, width: "20%", backgroundColor: '#388087', borderRadius: 20, marginLeft: '5%' }}>{selectedMonth}</Text>
                <Text style={{ height: 20, width: "20%", backgroundColor: '#388087', borderRadius: 20, marginLeft: '5%' }}>{selectedName}</Text>
               
            </View>


            <View style={{ flex: 0.50, marginTop: -40 }}>
                <FlatList
                    initialScrollIndex={ind}
                    ref={listRef}
                    data={data}
                    renderItem={({ item }) =>
                    (
                        <View style={{
                            padding: 40, borderWidth: 1, backgroundColor: '#6FB3B8', height: -20, borderColor: 'grey', flex: 0.60, flexDirection: 'row', shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                            elevation: 8,
                        }}>

                            <View style={{ alignItems: 'left', justifyContent: 'center' }}> <Image source={{ uri: item.image }} style={{ width: 120, height: 160, margin: 8, }}></Image></View>
                            <View>
                                <Text style={{ fontSize: 18, color: 'black', margin: 10, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ fontSize: 14, color: 'black', margin: 10 }}>{item.description}</Text>
                                <TouchableOpacity style={{ fontSize: 14, color: 'blue', margin: 10 }}>continue Reading</TouchableOpacity>
                            </View>
                        </View>
                    )
                    }
                />

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

export default CommonProblems;
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