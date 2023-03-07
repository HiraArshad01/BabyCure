import React, { useState , useEffect} from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Button, Input} from "react-native-elements";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const BabyDetails = ({navigation}) => {

    return (
        <View style = {styles.container}>
            <View style={{flex: 0.20, flexDirection:'row'}}>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}}> 
                    <Ionicons name='ios-medkit-outline' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}} onPress={()=>navigation.navigate('DietPlanWaterIntake')}> 
                    <Ionicons name='ios-nutrition-outline' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}} onPress={()=>navigation.navigate('Milestones')}> 
                    <Ionicons name='ios-trophy-outline' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:150, marginRight:150}} onPress={()=>navigation.navigate('Chat')}> 
                    <Ionicons name='md-pulse' size={32} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
            </View>
            <View  style={{flex: 0.70, marginTop: 10, background:'#BADFE7', width:'80%', height:'100%', shadowColor: "#000",
                                    shadowOffset: {width: 0,height: 4,}, shadowOpacity: 0.30,shadowRadius: 4.65,
                                     elevation: 8,borderRadius:20, alignItems:'center'}}>
              <TouchableOpacity style={{marginLeft:150, marginRight:150}}> 
                    <Ionicons name='ios-add-circle-outline' size={70} color='black' style={{margin: 5}} />
                    </TouchableOpacity>
            </View>
            
            <View style={{flex: 0.10, width: '100%', height: 100, backgroundColor: '#388087' , shadowColor: "#000",
                        shadowOffset: { width: 0, height: 4, }, shadowOpacity: 0.30, shadowRadius: 4.65,
                         elevation: 8, flexDirection:'row',marginTop:30, alignItems:'center',justifyContent:'center'}}>

                    <TouchableOpacity style={{flexDirection:'column'}}onPress={()=>navigation.navigate('homeScreen')}>
                        <FontAwesomeIcon name="home" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}} ></FontAwesomeIcon>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('AddBaby')}>
                        <FontAwesomeIcon name="plus" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate('Activities')}>
                        <FontAwesomeIcon name="clipboard" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={()=>navigation.navigate('More')}>
                        <MaterialIcons name="more" size={30} style={{padding: 10, marginLeft: 140, marginRight: 140}}/>
                    </TouchableOpacity>

                </View>

        </View>
    )
}

export default BabyDetails;
const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10,

    },
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#C2EDCE'
    }
})