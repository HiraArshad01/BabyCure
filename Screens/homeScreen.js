import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { LogoBar } from "../component/LogoBar";
import { BottomNavBar } from "../component/BottomNavBar";

const homeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <LogoBar/>

            <View style={{ flex: 0.60 }}>

                <TouchableOpacity style={{
                    marginTop: 10, backgroundColor: '#dcdcdc', width: '80%', height: '100%', shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                    elevation: 8, borderRadius: 20, alignItems: 'center'
                }} onPress={() => navigation.navigate('BabyDetails')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('BabyDetails')}>
                            <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }}>Azlan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('BabyDetails')}>
                            <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }}>Faizan</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }} onPress={() => navigation.navigate('Mother')}>Mother</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'column', paddingLeft: 25, paddingRight: 25 }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20 }}>Hi! Good Evening Azlan</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20 }}>BMI of baby: 6.0 kg</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', marginTop: 20 }}>Upcoming Vaccination : 24th December, 2023</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <Text style={{ fontSize: 16, fontWeight: '800' }}>2 Months</Text>
                        <Text style={{ fontSize: 16, fontWeight: '800', marginLeft: 30 }}>1 Week</Text>
                    </View>
                </TouchableOpacity>


            </View>


            <TouchableOpacity style={{
                flex: 0.10,
                marginTop: 20, backgroundColor: '#dcdcdc', width: '80%', height: '100%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center'
            }} onPress={() => navigation.navigate('BMICal')}>
                <Ionicons name='md-calculator' size={30} color='black' style={{ marginLeft: 30, marginTop: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 20, marginTop: 8 }}>BMI Calculator</Text>
            </TouchableOpacity>


            <TouchableOpacity style={{
                flex: 0.10,
                marginTop: 10, backgroundColor: '#dcdcdc', width: '80%', height: '60%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center'
            }} onPress={() => navigation.navigate('CommonProblems')}>
                <Ionicons name='md-bulb' size={30} color='black' style={{ marginLeft: 30, marginTop: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 20, marginTop: 8 }}>Common Problems</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                flex: 0.10,
                marginTop: 10, backgroundColor: '#dcdcdc', width: '80%', height: '100%', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center'
            }} onPress={() => navigation.navigate('DIYRemandRec')}>

                <Ionicons name='md-restaurant' size={30} color='black' style={{ marginLeft: 30, marginTop: 8 }} />
                <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 20, marginTop: 8 }}>DIY Remedies & Recipes</Text>
            </TouchableOpacity>
            <BottomNavBar/>
        </View>
    )
}

export default homeScreen;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    }
})