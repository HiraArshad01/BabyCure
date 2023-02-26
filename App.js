import React, { useState, useEffect, component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import ChatScreen from './Screens/ChatScreen';
import fetch from './Screens/fetch';
import homeScreen from './Screens/homeScreen';
import AddBaby from './Screens/AddBaby';
import Activities from './Screens/Activities';
import More from './Screens/More';
import BabyDetails from './Screens/BabyDetails';
import BMICal from './Screens/BMICal';
import CommonProblems from './Screens/CommonProblems';
import DIYRemandRec from './Screens/DIYRemandRec';
import mainPage from './Screens/mainPage';
import mainPageChoose from './Screens/mainPageChoose';
import forgetPassword from './Screens/forgetPassword';
import customizeDietPlan from './Screens/customizeDietPlan';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
 
    
    <Stack.Screen name = "mainPage" component={mainPage}/>
    <Stack.Screen name = "LoginScreen" component={LoginScreen}/>
    <Stack.Screen name = "RegisterScreen" component={RegisterScreen}/>
    <Stack.Screen name = "Chat" component={ChatScreen}/>
    <Stack.Screen name = "homeScreen" component={homeScreen}/>
    <Stack.Screen name = "fetch" component={fetch}/>
    <Stack.Screen name = "customizeDietPlan" component={customizeDietPlan}/> 
    <Stack.Screen name = "Activities" component={Activities}/>
    <Stack.Screen name = "More" component={More}/>
    <Stack.Screen name = "BabyDetails" component={BabyDetails}/>
    <Stack.Screen name = "BMICal" component={BMICal}/>
    <Stack.Screen name = "CommonProblems" component={CommonProblems}/>
    <Stack.Screen name = "DIYRemandRec" component={DIYRemandRec}/>
    <Stack.Screen name = "mainPageChoose" component={mainPageChoose}/>    
    <Stack.Screen name = "forgetPassword" component={forgetPassword}/> 
    <Stack.Screen name = "AddBaby" component={AddBaby}/>
  
 
    </Stack.Navigator>

  </NavigationContainer>
  );
}

