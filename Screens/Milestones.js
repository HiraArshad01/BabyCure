import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, SafeAreaView, TextInput} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from "react-native-modal";
import { SearchBar } from 'react-native-elements';


const Milestones = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const searchRef = useRef();
    const toggleModal = () => {
        setModalVisible(!isModalVisible);

    };

const onSearch = (text)=> {

    if(text=='')
    {
            setData(oldData);
    }
    else
    {
        let tempList = data.filter(item=>{
            return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
        })
        setData(tempList);

    }

}

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
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('Milestones')}>
                    <Ionicons name='ios-trophy-outline' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: 150, marginRight: 150 }} onPress={() => navigation.navigate('DoctorConsultancy')}>
                    <Ionicons name='md-pulse' size={32} color='black' style={{ margin: 5 }} />
                </TouchableOpacity>
            </View>
       <View style={{flex: 0.20}}>
       <TextInput
           ref={searchRef}
           placeholder="search item here...."
           style={{width:'76%', height: '30%'}}
           value={search}
           onChangeText={text => {
            onSearch(text)
            setSearch(text)
           }}
           >

           </TextInput>
       </View>

            <Modal isVisible={isModalVisible}>

                <View style={{ flex: 1 , marginTop: -40 }}>
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
                                    }} onPress={() => { toggleModal(); setNewData(item) }}>Add Milestone</TouchableOpacity>
                                </View>
                            </View>

                        )
                        }
                    />

                </View>
            </Modal>

            <View style={{ flex: 0.50, marginTop: -40 }}>
                <FlatList
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
                            </View>
                        </View>
                    )
                    }
                />




            </View>
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