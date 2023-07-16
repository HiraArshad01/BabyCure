import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from "react-native-paper";
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import { TopBar } from "../component/TopBar";
import { LogoBar } from "../component/LogoBar";
import { BottomNavBar } from "../component/BottomNavBar";




const PhysicalActivitiesMain = (props) => {

    const [data, setData] = useState([]);
    const [newFilter, setNewFilter] = useState("");
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    const listRef = useRef();
    const navigation = useNavigation();


    const [ind, setInd] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false);

    let generateRandomNum = () => Math.floor(Math.random() * 1001);




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
        fetch('https://jsonplaceholder.typicode.com/todos')
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
            <TopBar/>
           <LogoBar/>




            <View style={{ flex: 0.80, alignItems: 'center' }}>

                <View style={{ flex: 0.50, marginTop: 10 }}>
                    <Image source={{ uri: props.route.params.uri }} style={{ height: 300, width: 400, resizeMode: 'contain' }} />
                </View>

                <View style={{ flex: 0.30, marginTop: 200 }}>
                    <Text style={{ magrinTop: 10, fontSize: 18, fontWeight: "bold", marginLeft: 10 }}>{props.route.params.title}</Text>
                    <Text style={{ marginTop: 10, fontSize: 14, marginLeft: 10 }}>{props.route.params.description}</Text>
                </View>

            </View>


            <BottomNavBar/>

        </View>
    )
}

export default PhysicalActivitiesMain;
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