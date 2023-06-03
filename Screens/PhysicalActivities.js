import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { LogoBar } from "../component/LogoBar";
import { BottomNavBar } from "../component/BottomNavBar";

const PhysicalActivities = (props) => {

    const [data, setData] = useState([]);
    const [newFilter, setNewFilter] = useState("");
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const listRef = useRef();
    const navigation = useNavigation();

    const categories = [
        'Sort By Month', 'Sort by Name'
    ]

    const [ind, setInd] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false);

    let generateRandomNum = () => Math.floor(Math.random() * 1001);


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

    const onAddFilter = () => {

        if (newFilter == "") {
            alert('Cant add');
        }

        else {
            console.log("in start")
            var newDataObject = {
                id: generateRandomNum,
                title: newFilter,
            }
            setNewData([...newData, newDataObject])
            console.log("in filter")
        }
    }

    const FilterClick = () => {
        let tempList = data.sort((a, b) =>
            a.title > b.title ? 1 : -1);
        setData(tempList);
        setNewFilter('Sort By Month')
        listRef.current.scrollToIndex({ animated: true, index: 0 })
    }


    useEffect(() => {
        // fetch('https://fakestoreapi.com/products')
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

           <LogoBar/>


            <View style={{ flex: 0.10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
                <Ionicons name='ios-search' size={20} color='black' style={{ margin: 5 }} />
                <TextInput
                    ref={searchRef}
                    placeholder="search item here...."
                    style={{ width: '70%', borderBottomWidth: 0, height: 30, fontSize: 20, backgroundColor: 'white' }}
                    value={search}
                    onChangeText={text => {
                        onSearch(text)
                        setSearch(text)
                    }} />
                {
                    search == '' ? null : (
                        <TouchableOpacity onPress={() => {
                            searchRef.current.clear()
                            onSearch('')
                            setSearch('')

                        }}>
                            <Ionicons name='ios-close' size={20} color='black' style={{ margin: 5 }} />
                        </TouchableOpacity>
                    )
                }
            </View>

            <View style={{ flex: 0.10, flexDirection: 'row' }}>
                {
                    categories.map((category, index) => (

                        <View key={index}>
                            <TouchableOpacity onPress={() => { FilterClick() }}>

                                <Text style={{
                                    padding: 10, borderWidth: 1,
                                    borderColor: 'black', borderRadius: 10, fontSize: 15, margin: 5, backgroundColor: 'black', color: 'white'
                                }}>{category}</Text>
                            </TouchableOpacity>
                        </View>
                    ))
                }

            </View>


            <View style={{ flex: 0.60 }}>
                <FlatList
                    initialScrollIndex={ind}
                    ref={listRef}
                    data={data}
                    renderItem={({ item }) =>
                    (
                        <View style={{
                            borderWidth: 1, backgroundColor: '#dcdcdc', borderColor: 'grey',
                            flexDirection: 'row', shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                            elevation: 8, marginTop: 5, marginLeft: 5, marginRight: 5
                        }}>

                            <View style={{ justifyContent: 'center' }}><Image source={{ uri: item.image }} style={{ width: 120, height: 160, margin: 8, }}></Image></View>
                            <View>
                                <Text style={{ fontSize: 16, color: 'black', margin: 10, fontWeight: 'bold', width: '90%' }}>{item.title}</Text>
                                <Text style={{ fontSize: 14, color: 'black', margin: 10, width: '30%' }}>{item.description}</Text>
                                <TouchableOpacity style={{ fontSize: 14, color: 'blue', margin: 10 }} key={item.id} onPress={() => {
                                    props.navigation.navigate('CommonProblemMain', { title: item.title, description: item.description, uri: item.image })
                                }}><Text style={{ color: '#b8860b' }}>continue Reading</Text></TouchableOpacity>
                            </View>
                        </View>
                    )} />
            </View>
            <BottomNavBar/>
        </View>
    )
}

export default PhysicalActivities;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    }
})