import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from "react-native";
import { Button, Input } from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SearchComp from "../component/SearchComp";
import { ScrollView } from "react-native-gesture-handler";
import { TopBar } from "../component/TopBar";
import { LogoBar } from "../component/LogoBar";
import { BottomNavBar } from "../component/BottomNavBar";

const DietPlanWaterIntake = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [newFilter, setNewFilter] = useState("");
    const [newData, setNewData] = useState([]);
    const [oldData, setOldData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();


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


    return (
        <View style={styles.container}>
            <TopBar/>
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


            <View style={{
                flex: 0.55, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 20, alignItems: 'center', backgroundColor: '#dcdcdc', width: '80%', height: '100%',
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
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65, elevation: 8,
                }}
                    onPress={() => navigation.navigate('customizeDietPlan')}><Text style={{ color: 'white', fontSize: 20 }}>Customize Diet Plan</Text></TouchableOpacity>


            </View>

        <BottomNavBar/>
        </View>
    )
}

export default DietPlanWaterIntake;
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