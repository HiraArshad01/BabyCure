import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const homeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={{ flex: '0.60' }}>
                <TouchableOpacity style={{
                     marginTop: 10, background: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                    shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                    elevation: 8, borderRadius: 20, alignItems: 'center'
                }} onPress={() => navigation.navigate('BabyDetails')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }}>Azlan</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }}>Faizan</Text>
                        <Text style={{ fontSize: 16, fontWeight: '600', padding: '10%' }}>Mother</Text>
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
            <View style={{ flex: '0.30' }}>
                <View style={{ flex: '0.10' }}>

                    <TouchableOpacity style={{
                   marginTop: 10, background: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                        elevation: 8, borderRadius: 10, flexDirection: 'row'
                    }} onPress={() => navigation.navigate('BMICal')}>
                        <Ionicons name='md-calculator' size={32} color='black' style={{ margin: 5 }} />
                        <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>BMI Calculator</Text>
                    </TouchableOpacity>


                </View>
                <View style={{ flex: '0.10' }}>


                    <TouchableOpacity style={{
                      marginTop: 10, background: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                        elevation: 8, borderRadius: 10, flexDirection: 'row'
                    }} onPress={() => navigation.navigate('CommonProblems')}>
                        <Ionicons name='md-bulb' size={32} color='black' style={{ margin: 5 }} />
                        <Text style={{ fontSize: 16, fontWeight: '700', marginTop: 10 }}>Common Problems</Text>
                    </TouchableOpacity>

                </View>
                <View style={{ flex: '0.10' }}>
                    <TouchableOpacity style={{
                     marginTop: 10, background: '#BADFE7', width: '80%', height: '100%', shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                        elevation: 8, borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                    }} onPress={() => navigation.navigate('DIYRemandRec')}>

                        <Ionicons name='md-restaurant' size={20} color='black' style={{ margin: 5 }} />
                        <Text style={{ fontSize: 16, fontWeight: '700' }}>DIY Remedies & Recipes</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{
                flex: 0.10, width: '100%', height: 100, backgroundColor: '#388087', shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.30, shadowRadius: 4.65,
                elevation: 8, flexDirection: 'row', marginTop: 30, alignItems: 'center', justifyContent: 'center'
            }}>

                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => navigation.navigate('homeScreen')}>
                    <FontAwesomeIcon name="home" size={30} style={{ padding: 10, marginLeft: 140, marginRight: 140 }}></FontAwesomeIcon>
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

export default homeScreen;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#6FB3B8',
    }
})