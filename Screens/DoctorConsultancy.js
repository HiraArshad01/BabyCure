import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from "react-native";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchComp from "../component/SearchComp";
import { SelectMultiple } from 'react-native-select-multiple'

const DoctorConsultancy = ({ navigation }) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selected, setSelected] = React.useState([]);
    console.log(data);

    const list = [

        { key: '2', value: '1-3 Months' },
        { key: '3', value: 'Liquids' },
        { key: '5', value: 'Solids' },
        { key: '6', value: '4-6 Months' },
        { key: '7', value: '7-9 Months' },
        { key: '8', value: '10-12 Months' },
        { key: '9', value: '13-15 Months' },
        { key: '10', value: '16-18 Months' },
        { key: '11', value: '19-21 Months' },
        { key: '12', value: '22-24 Months' },
    ]
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((json) => setData(json))
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

            <View style={{ flex: 0.10, marginBottom: 30 }}>
                <SearchComp></SearchComp>
            </View>

            <View style={{ flex: 0.30, marginBottom: 10, marginTop: 10, width: 200, padding: 20 }}>
                <MultipleSelectList

                    setSelected={(val) => setSelected(val)}
                    data={list}
                    save="value"
                    onSelect={() => alert(selected)}
                    label="Filter"

                />
            </View>


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

export default DoctorConsultancy;
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