import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const homeScreen = ({navigation}) => {
    return (
        <View style = {styles.container}>
             
            <TouchableOpacity style={{flex: 0.60, marginTop: 10, background:'#436DB7', width:'80%', height:'100%', shadowColor: "#000",
                                    shadowOffset: {width: 0,height: 4,}, shadowOpacity: 0.30,shadowRadius: 4.65,
                                     elevation: 8,borderRadius:20, alignItems:'center'}} onPress={()=>navigation.navigate('BabyDetails')}>
                <Text style={{fontSize: 30, fontWeight: '800', fontFamily: 'Tahoma', marginTop: 10}}  >Azlan                                Faizan                                    Mother</Text>
                <Text  style={{fontSize: 20, fontWeight: '600', fontFamily: 'Tahoma', marginTop: 40}}>Hi! Good Evening Azlan</Text>
                <Text  style={{fontSize: 20, fontWeight: '600', fontFamily: 'Tahoma', marginTop: 20}}>BMI of baby: 6.0 kg</Text>
                <Text  style={{fontSize: 20, fontWeight: '600', fontFamily: 'Tahoma', marginTop: 20}}>Upcoming Vaccination : 24th December, 2023</Text>
                <Text  style={{fontSize: 20, fontWeight: '800', fontFamily: 'Tahoma', marginTop: 40}}>2 Months                                                                       1 Week</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{flex: 0.10, marginTop: 10, background:'#436DB7', width:'80%', height:'100%', shadowColor: "#000",
                                    shadowOffset: {width: 0,height: 4,}, shadowOpacity: 0.30,shadowRadius: 4.65,
                                     elevation: 8,borderRadius:10, flexDirection:'row'}} onPress={()=>navigation.navigate('BMICal')}>
                <Ionicons name='md-calculator' size={32} color='black' style={{margin: 5}} />
                <Text style={{fontSize: 18, fontWeight: '700', fontFamily: 'Tahoma', marginTop:10}}>BMI Calculator</Text>
            </TouchableOpacity>
             

            <TouchableOpacity style={{flex: 0.10, marginTop: 10, background:'#436DB7', width:'80%', height:'100%', shadowColor: "#000",
                                    shadowOffset: {width: 0,height: 4,}, shadowOpacity: 0.30,shadowRadius: 4.65,
                                     elevation: 8,borderRadius:10, flexDirection:'row'}} onPress={()=>navigation.navigate('CommonProblems')}>
                <Ionicons name='md-bulb' size={32} color='black' style={{margin: 5}} />
                <Text style={{fontSize: 18, fontWeight: '700', fontFamily: 'Tahoma', marginTop: 10 }}>Common Problems</Text>
            </TouchableOpacity>
        
            <TouchableOpacity style={{flex: 0.10, marginTop: 10, background:'#436DB7', width:'80%', height:'100%', shadowColor: "#000",
                                    shadowOffset: {width: 0,height: 4,}, shadowOpacity: 0.30,shadowRadius: 4.65,
                                     elevation: 8,borderRadius:10, flexDirection:'row'}} onPress={()=>navigation.navigate('DIYRemandRec')}>

                <Ionicons name='md-restaurant' size={32} color='black' style={{margin: 5}} />
                <Text style={{fontSize: 18, fontWeight: '700', fontFamily: 'Tahoma', marginTop: 10 }}>DIY Remedies & Recipes</Text>

            </TouchableOpacity>
         
                <View style={{flex: 0.10, marginTop: 10, background:'lightgrey', width:'100%', height:'100%', shadowColor: "#000",
shadowOffset: {width: 0,height: 4,}, shadowOpacity: 0.30,shadowRadius: 4.65, elevation: 8,borderRadius:10}}>
                        <Text>Navbar Here</Text>
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
    container:{
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor:'#B8E0FD',
    }
})